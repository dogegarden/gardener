const { User } = require("discord.js");

var cnt; 
module.exports = {
    name: "warn",
    description: "Warn a user",
    execute: (message, args) => {
      message.reply(`${User} was warned.`, { mentionUser: false })
    },
  };
  