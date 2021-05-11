const { wrap, raw } = require("@dogehouse/kebab");
require("dotenv").config();

module.exports = {
  name: "ban_chat",
  description: "Ban user",
  execute: async (msg, args) => {
    let username = "admin";

    if (args[0][0] == "@") {
      username = args[0].slice(1);
    } else username = args[0];

    msg.room.sendChatMessage(`${username} banned from chat.`, {
      mentionUser: false,
    });

    console.log("Token is : "), console.log("Refresh Token is : ");

    const wrapper = wrap(
      await raw.connect(process.env.TOKEN, process.env.REFRESH_TOKEN, {})
    );

    wrapper.query
      .getUserProfile(username)
      .then((user) => {
        wrapper.mutation.banFromRoomChat(username);
      })
      .catch((error) => {
        console.log(error);
      });

    return;
  },
};
