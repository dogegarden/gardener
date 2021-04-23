
require("dotenv").config();
const { Client, EVENT } = require("dogehouse.js");
const app = new Client();
const fs = require("fs");
const axios = require('axios')
const prefix = "!";

cmd = new Array();

const get = () => {
  cmd.length = 0;
  const commandFolders = fs.readdirSync("./commands");
  for (const folder of commandFolders) {
    const commandFiles = fs
      .readdirSync(`./commands/${folder}`)
      .filter((file) => file.endsWith(".js"));

    for (const file of commandFiles) {
      const command = require(`./commands/${folder}/${file}`);
      command.category = folder;
      cmd.push(command);
    }
  }
};

app.connect(process.env.TOKEN, process.env.REFRESH_TOKEN).then(async () => {
	console.log('Connected!')
  get(); 
	app.rooms.join('f489c2fa-f76d-4dd5-b0ed-58b23b928aa0')
});


app.on(EVENT.NEW_CHAT_MESSAGE, (message) => {

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();



  if (command == "help") {
    cmd
      .find((com) => com.name == command)
      .execute(message, args, cmd);
    return;
  }

  if (command == "cats") {
    axios
    .get('https://api.thecatapi.com/v1/images/search')
    .then((res) => {
      console.log('RES:', res.data[0].url)
      message.reply(res.data[0].url)
      return;
    })
  }



  const commandCheck = cmd.find((com) => com.name == command);

  if (commandCheck.category === "General") {
    commandCheck.execute(message, args);
    return;

  } 
  
  else{
    commandCheck.execute(message, args);
    return;
  }

});

app.on(EVENT.USER_JOINED_ROOM, (user) => {
  const privateWelcomeMessage = [
    "Hi ",
    { mention: user.username },
    "This is gardener, an official bot for dogegarden"
  ];

  user.whisper(privateWelcomeMessage);
});