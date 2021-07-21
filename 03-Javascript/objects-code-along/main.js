// // OBJECT SYNTAX

// const exampleObject = {
//   key: "value", // COMMA TO ADD MORE KEY:VALUE PAIRS
//   types: "any", // STRING, BOOLEAN, ARRAY ETC
//   method() {
//     // DO SOMETHING
//     // this keyword is to refer to the object
//     return this.key + " " + this.types;
//   },
// };

// // ACCESS OBJECTS
// // DOT NOTATION
// console.log(exampleObject.key);
// console.log(exampleObject.types);

// // CALLING A METHOD
// console.log(exampleObject.method());

// // BRACKET NOTATION
// console.log(exampleObject["key"]);
// console.log(exampleObject["types"]);

// // ADDING A NEW KEY:VALUE PAIR TO AN OBJECT
// exampleObject.newKey = "new value";

// console.log(exampleObject);

const studentContainer = document.querySelector(".students-container");

//studentContainer.style.border = "50px solid red";

const person = {
  firstName: "Mark",
  lastName: "Lawson",
  quote: "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.",
  skills: ["HTML", "CSS", "Javascript"],
  imageURL: "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  getSkillsHTML() {
    const skillsHTML = this.skills.map((skill) => `<li>${skill}</li>`);
    console.log(skillsHTML);
    return skillsHTML.join("\n"); // \n breaks the <li> on to new line
  },
  getStudentDetails() {
    const studentDetails = ` 
    <article class="student-card">
    <img src = ${this.imageURL} />
    <h2>${this.getFullName()}</h2>
    <blockquote>${this.quote}</blockquote>
    <h3>Skills</h3>
    <ul>${this.getSkillsHTML()}</ul>
    `;

    return studentDetails;
  },
};

for (let i = 0; i < 9; i++) {
  studentContainer.innerHTML += person.getStudentDetails();
}

// INNER HTML HAS TO BE INSIDE A STRING
// studentContainer.innerHTML = `
// <article class="student-card">
// <img src = ${person.imageURL} />
// <h2>${person.getFullName()}</h2>
// <blockquote>${person.quote}</blockquote>
// <h3>Skills</h3>
// <ul>${person.getSkillsHTML()}</ul>
// `;

// WRITE A METHOD THAT USES THE SKILLS ARRAY
// ITERATE OVER THE SKILLS ARRAY AND GENERATE A LIST ITEM FOR EACH SKILL
// E.G. <li>html</li>
// NEED TO RETURN A STRING -> TURN ARRAY INTO A STRING

person.age = 55;
//console.log(person.getSkillsHTML());
// // FIRST NAME AND LAST NAME
// console.log(person.firstName + " " + person.lastName);

// // GET THE RESULT OF getFullname on th CONSOLE
// console.log(person.getFullName());
