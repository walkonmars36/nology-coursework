// OBJECT SYNTAX

const exampleObject = {
  key: "value", // COMMA TO ADD MORE KEY:VALUE PAIRS
  types: "any", // STRING, BOOLEAN, ARRAY ETC
  method() {
    // DO SOMETHING
    // this keyword is to refer to the object
    return this.key + " " + this.types;
  },
};

// ACCESS OBJECTS
// DOT NOTATION
console.log(exampleObject.key);
console.log(exampleObject.types);

// CALLING A METHOD
console.log(exampleObject.method());

// BRACKET NOTATION
console.log(exampleObject["key"]);
console.log(exampleObject["types"]);

// ADDING A NEW KEY:VALUE PAIR TO AN OBJECT
exampleObject.newKey = "new value";

console.log(exampleObject);
