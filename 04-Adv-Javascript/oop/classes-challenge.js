class Employee {
  constructor(name, rating, grade, nextGrade) {
    this.name = name;
    this.rating = rating;
    this.grade = grade;
    this.nextGrade = nextGrade;
  }

  getRating() {
    if (this.rating >= 7) {
      return `${this.name} will be promoted to ${this.nextGrade}`;
    } else {
      return `${this.name} will remain as a ${this.grade}`;
    }
  }
}

const mark = new Employee("Mark", 8, "Manager", "Senior Manager");

const rocket = new Employee("Rocket", 8, "Dog", "SuperDog");

console.log(rocket);

console.log(mark.getRating());

console.log(rocket.getRating());
