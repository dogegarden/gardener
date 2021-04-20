module.exports = {
  name: "random",
  description: "Random number 0-100",
  execute: (message, args) => {
    const msgObj = [
      `Pog number: ${Math.floor(Math.random() * 101)}`,
      { emote: "EZ" },
    ];
    message.reply(msgObj, { whispered: false, mentionUser: true });
  },
};
