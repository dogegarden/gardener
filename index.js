const Moonstone = require("moonstone-wrapper");
const bot = Moonstone(require("./auth"));

const { cooldowns } = bot;

const fs = require("fs");

bot.on("ready", async (user) => {
  console.log("Ready! Logged in as " + user.username);
  await bot.joinRoom("59c8926b-18dd-4bee-89a4-728730b7f789"); // Join room
});

commands = new Array();
commands.length = 0;

const commandFolders = fs.readdirSync("./commands");
for (const folder of commandFolders) {
  const commandFiles = fs
    .readdirSync(`./commands/${folder}`)
    .filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    command.category = folder;
    commands.push(command);
  }
}

const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    bot.once(event.name, (...args) => event.execute(...args));
  } else {
    bot.on(event.name, (...args) => event.execute(...args));
  }
}

bot.connect();
