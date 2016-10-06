var students = require('../data/students.js');

window.onload = () => {
  var container = document.querySelector('#images-container');

  for (var team of students) {
    doStuff();
  }
}

console.log(students);
