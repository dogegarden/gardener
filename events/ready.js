const Moonstone = require("moonstone-wrapper");
const bot = Moonstone(require("../auth"));

module.exports = {
	name: 'ready',
	once: true,
	 execute() {
        console.log("Ready!");
    }
};