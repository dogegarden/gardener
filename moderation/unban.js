
const { wrap, raw } = require("@dogehouse/kebab");

module.exports = {
  name: "unban",
  description: "Unban user",
  execute: async (message, args) => {
    let username;

    if (args[0][0] == "@") {
      username = args[0].slice(1);
    } else username = args[0];

    message.reply(`${username} unbanned from chat.`, { mentionUser: false });

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
        wrapper.mutation.unbanFromRoom(user.id);
      })
      .catch((error) => {
        console.log(error);
      });

    return;
  },
};