require("./styles/main.css");
var students = require('../data/students.js');

window.onload = () => {
  var container = document.querySelector('#images-container');

  for (var team of students) {
    //doStuff();
  }

  var Teams = require('./models/teams.js');
  var teams = new Teams();
}

console.log(students);
