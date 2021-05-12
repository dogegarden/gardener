const { wrap, raw } = require("@dogehouse/kebab");
require("dotenv").config();

module.exports = {
  name: "ban_chat",
  description: "Kick user",
  execute: async (msg, args) => {
    let username = "admin";
    const wrapper = wrap(
      await raw.connect(process.env.TOKEN, process.env.REFRESH_TOKEN, {})
    );
    wrapper.query
      .getUserProfile(username)
      .then(async (user) => {
        if (user) {
          // @ts-ignore
          await wrapper.mutation.roomBan;
          return msg.room.sendChatMessage("Ban successful");
        }
        // Doesn't do anything
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
