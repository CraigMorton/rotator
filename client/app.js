require("./styles/main.css");
var students = require('../data/students.js');
var Teams = require('./models/teams.js');

window.onload = () => {
  var container = document.querySelector('#images-container');

  for (var team of students) {
    //doStuff();
  }


  var teams = new Teams();
}

console.log(students);
