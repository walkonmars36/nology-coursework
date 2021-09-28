const moment = require("moment");

const aDay = new Date();
const niceDay = moment(aDay).format("MMMM Do YYYY, h:mm:ss a");
console.log(aDay);
console.log(niceDay);
