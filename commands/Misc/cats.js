  module.exports = {
    name: "hello",
    description: "Hello human",
    execute: (message, args) => {
        axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then((res) => {
          console.log('RES:', res.data[0].url)
          message.reply(res.data[0].url)
        })
        .catch((err) => {
          console.error('ERR:', err)
        })
    },
  };
  