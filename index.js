// Function for generating random number
const genNumber = (num2) => {
  return Math.floor(Math.random() * 100) % (num2 + 1);
};

// Function for generating the password
const generatePassword = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const createPassword = (num1, num2) => {
  let number = genNumber(num2);
  while (number < num1) {
    number = genNumber(num2);
  }
  return generatePassword(number);
};

module.exports = createPassword;
