
const { wrap, raw } = require("@dogehouse/kebab");

module.exports = {
  name: "ban_chat",
  description: "Ban user",
  execute: async (message, args) => {
    let username = "chopin";

    if (args[0][0] == "@") {
      username = args[0].slice(1);
    } else username = args[0];

    message.reply(`${username} banned from chat.`, { mentionUser: false });

    const wrapper = wrap(
      await raw.connect(
        process.env.TOKEN,
        process.env.REFRESH_TOKEN,
        {}
      )
    );

    wrapper.query
      .getUserProfile(username)
      .then((user) => {
        wrapper.mutation.banFromRoomChat(user.id);
      })
      .catch((error) => {
        console.log(error);
      });

    return;
  },
};