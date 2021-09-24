const validMessage = {
  username: "Mark",
  content: "How are you doing today?",
};

const invalidMessage = {
  error: 63277511,
  content: "How are you doing today?",
};

// for (let key in message) {
//   console.log(key);
//   console.log(message[key]);
// }

// const validateMessageObject = (messageObject) => {
//   for (let key in messageObject) {
//     const typeCheck = typeof messageObject[key] !== "string";

//     if (typeCheck) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(validateMessageObject(invalidMessage));
// console.log(validateMessageObject(validMessage));

const validMessageValues = Object.values(validMessage);

const invalidMessageValues = Object.values(invalidMessage);

// console.log(validMessageValues);
// console.log(invalidMessageValues);

// console.log(
//   validMessageValues.every((validMessage) => {
//     const typeCheck = typeof validMessage === "string";
//     return typeCheck;
//   })
// );

// console.log(
//   invalidMessageValues.every((validMessage) => {
//     const typeCheck = typeof validMessage === "string";
//     return typeCheck;
//   })
// );

const validMessageKeys = Object.keys(validMessage);
const invalidMessageKeys = Object.keys(invalidMessage);

console.log(validMessageKeys);
console.log(invalidMessageKeys);

// write function that will check the keys of a message object
// valid keys are ['username', 'content']
// return true for valid and false for in valid

const validateMessageKeys = (messageObject) => {
  // GET THE KEYS
  const objectKeys = Object.keys(messageObject);
  // CHECK IF THEY ARE VALID
  const keyCheck = objectKeys.every((key) => {
    const validKeys = ["username", "content"];
    return validKeys.includes(key);
  });
  // RETURN THIS CHECK
  return keyCheck;
};

// console.log(validateMessageKeys(validMessage));
// console.log(validateMessageKeys(invalidMessage));

const validMessageEntries = Object.entries(validMessage);
const invalidMessageEntries = Object.entries(invalidMessage);

console.log(validMessageEntries);
console.log(invalidMessageEntries);

const validateMessageObject = (messageObject) => {
  const objectEntries = Object.entries(messageObject);

  const validation = objectEntries.every((entry) => {
    const key = entry[0];
    const value = entry[1];

    //check the type of value
    const typeCheck = typeof value === "string";
    // check key is valid
    const validKeys = ["username", "content"];
    const keyCheck = validKeys.includes(key);

    return typeCheck && keyCheck;
  });

  return validation;
};

console.log(validateMessageObject(validMessage));

console.log(validateMessageObject(invalidMessage));
