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
	app.rooms.join('1974448f-a973-475e-94e0-eea0d6caed21')
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

  if (command == "hello") {
    cmd
      .find((com) => com.name == command)
      .execute(message, args, cmd);
    return;
  }

  if (command == "emoji") {
    cmd
      .find((com) => com.name == command)
      .execute(message, args, cmd);
    return;
  }


  if (
    message.content == prefix + "reload" &&
    message.author.id == process.env.OWNER_ID
  ) {
    loadCommands();
    return;
  }

  const commandCheck = cmd.find((com) => com.name == command);

});

app.on(EVENT.USER_JOINED_ROOM, (user) => {
  const privateWelcomeMessage = [
    "Hi ",
    { mention: user.username },
    "This is gardener, an official bot for dogegarden"
  ];

  user.whisper(privateWelcomeMessage);
});