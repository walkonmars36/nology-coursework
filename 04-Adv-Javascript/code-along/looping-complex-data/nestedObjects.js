const userOne = {
  id: "fdsajfh4324324",
  loggedIn: true,
  information: {
    firstName: "Mark",
    lastName: "Lawson",
    age: 55,
    likes: ["music", "travelling", "podcasts", "films"],
  },
  contact: {
    email: "walkonmars@gmail.com",
    contactNumber: "07855500523",
    address: {
      houseNumber: 36,
      nameOfRoad: "Whitehall Road",
      postcode: "BS5 9BE",
      city: "Bristol",
    },
  },
};

const userTwo = {
  id: "hjkhljksahfhffh545",
  loggedIn: true,
  information: {
    firstName: "Jude",
    lastName: "Lawson",
    age: 49,
    likes: ["music", "travelling", "podcasts", "films"],
  },
  contact: {
    email: "judegoode@gmail.com",
    contactNumber: "07900498454",
    address: {
      houseNumber: 36,
      nameOfRoad: "Whitehall Road",
      postcode: "BS5 9BE",
      city: "Bristol",
    },
  },
};

// console.log(user.contact.contactNumber);

// //age
// console.log(user.information.age);

// //city
// console.log(user.contact.address.city);

// // contact object
// console.log(user.contact);

// // likes
// console.log(user.information.likes[2]);

const userArray = [userOne, userTwo];

userArray.forEach((user) => {
  console.log(user.information.firstName);
});
