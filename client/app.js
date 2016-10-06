var students = require('../data/students.js');

window.onload = () => {
  var container = document.querySelector('#images-container');
  
  for (var student of students) {
    var img = document.createElement('img');
    img.src = 'images/' + student + '.jpg';
    container.appendChild(img);
  }
}

console.log(students);
