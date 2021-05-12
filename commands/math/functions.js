var ans;

module.exports = {
  calculator: function (num1, operator, num2) {
    if (!num1) throw new TypeError("Missing num1");
    if (!operator) throw new TypeError("Missing operator");
    // if (!num2) throw new TypeError("Missing num2");
    if (operator == "*") ans = num1 * num2;
    if (operator == "^") ans = num1 ^ num2;
    if (operator == "+") ans = num1 + num2;
    if (operator == "-") ans = num1 - num2;
    if (operator == "/") ans = num1 / num2;
    if (operator == "/") ans = num1 / num2;
    if (num1 == "sqrt") ans = Math.sqrt(operator);
  },
  formatDate: function (date) {
    return new Intl.DateTimeFormat("en-US").format(date);
  },
};
