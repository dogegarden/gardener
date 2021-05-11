const { calculator } = require("./functions");
module.exports = {
  name: "math",
  description: "math",
  execute: (num1, operator, num2) => {
    console.log(calculator(num1, operator, num2));
  },
};
