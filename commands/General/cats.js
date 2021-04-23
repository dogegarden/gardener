const axios = require('axios')


module.exports = {
    name: "cats",
    description: "cats",
    execute: (message, args) => {
        axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then((res) => {
          message.reply(res.data[0].url)
          return;
        })
    },
  };
  

