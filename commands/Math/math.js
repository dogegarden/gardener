const {calculator} = require('./functions')
module.exports = {
    name: "math",
    description: "math",
    execute: (message, args) => {
      message.reply(calculator(args[0], args[1], args[2]))
    },
  };
  