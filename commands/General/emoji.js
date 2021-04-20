module.exports = {
  name: "emoji",
  description: "Emoji",
  execute: (message, args) => {
    const emojis = [":CoolHouse:", ":EZ:", ":HACKERMANS:"];
    const msgObj = [`${emojis[Math.floor(Math.random() * 3)]}`];
    message.reply(msgObj, { whispered: true, mentionUser: false });
  },
};
