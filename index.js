
require("dotenv").config();
const { Client, EVENT } = require("dogehouse.js");
const app = new Client();
const fs = require("fs");

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
	app.rooms.join('8b9e9af0-70a3-4f1b-90f9-571928213967')
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

  const commandCheck = cmd.find((com) => com.name == command);
  if (commandCheck.category == "Economy") {
    commandCheck.execute(message, args, currency, Users, ItemShop, app, Op);
    return;
  } else if (commandCheck.category == "Tags") {
    commandCheck.execute(message, args, Tags);
    return;
  } else {
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