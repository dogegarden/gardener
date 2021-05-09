//Declarations :)

require("dotenv").config();
const { Client, EVENT } = require("dogehouse.js");
const app = new Client();
const fs = require("fs");
const prefix = "!";

app.connect(process.env.TOKEN, process.env.REFRESH_TOKEN).then(async () => {
	console.log('Connected!')
  get(); 
	app.rooms.join('f489c2fa-f76d-4dd5-b0ed-58b23b928aa0')
}); 

//The Logic
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


app.on(EVENT.NEW_CHAT_MESSAGE, (message) => {

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();


  const commandCheck = cmd.find((com) => com.name === command);

  if (commandCheck.category == undefined) {
    message.reply("Invalid command")
    return;

  } 

  if (commandCheck.category === "General") {
    commandCheck.execute(message, args);
    return;

  } 

  else if (commandCheck.category === "Math") {
    commandCheck.execute(message, args);
    return;

  } 

  else if (commandCheck.category === "Moderation") {
    commandCheck.execute(message, args);
    return;

  } 

  else{
    message.reply("Invalid command")
  }
  
});

app.on(EVENT.USER_JOINED_ROOM, (user) => {
  const privateWelcomeMessage = [
    "Hi ",
    { mention: user },
    "This is gardener, an official bot for dogegarden"
  ];

  app.bot.sendMessage(privateWelcomeMessage);
});