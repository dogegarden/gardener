module.exports = {
  name: "test",
  description: "test",
  args: true,
  execute: (msg, args) => {
    if (args[0] === "foo") {
      return msg.room.sendChatMessage("bar");
    }
  },
};
