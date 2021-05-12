const prefix = "!";

module.exports = {
  name: "newChatMsg",
  execute(msg) {
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!msg.content.startsWith(prefix)) return;
    const commandCheck = commands.find((com) => com.name === command);

    try {
      commandCheck.execute(msg, args);
    } catch (error) {
      msg.room.sendChatMessage("Invalid command");
    }
  },
};
