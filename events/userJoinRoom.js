module.exports = {
	name: 'userJoinRoom',
	execute(user) {
		 user.sendWhisper(
            "Hi, welcome to the room! Type !play <url> to play music"
          );
	},
};