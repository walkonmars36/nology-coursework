// Shallow copy

const simpleArray = [1, 2, 3, 4];
const simpleObject = {key: "value"};

const shallowArrayCopy = simpleArray;
const shallowObjectCopy = simpleObject;

// simpleArray.push(5);
// simpleObject.newKey = "new value";

// console.log(shallowArrayCopy);
// console.log(shallowObjectCopy);

// Deep copy
// ... -> spread operator (only copies top level, see nested objects)

const deepArrayCopy = [...simpleArray];

const deepObjectcopy = {...simpleObject};

simpleArray.push(5);
simpleObject.newKey = "new value";

// console.log(simpleArray);
// console.log(deepArrayCopy);

// console.log(simpleObject);
// console.log(deepObjectcopy);

// Nested objects

const complexArray = [[1], [2], [3]];
const complexObject = {data: {key: "value"}};

const complexArrayCopy = complexArray.map((array) => [...array]);
const complexObjectCopy = {...complexObject, data: {...complexObject.data}};

// complexArray[0].push(2);
// complexObject.data.newKey = "new value";

// console.log(complexArrayCopy);
// console.log(complexArray);
// console.log(complexObjectCopy);
// console.log(complexObject);

//JSON

const JSONObject = JSON.stringify(complexObject);
const parsedJSON = JSON.parse(JSONObject);

complexObject.data.newKey = "new value";

console.log(JSONObject);
console.log(parsedJSON.data);
