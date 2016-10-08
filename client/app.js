require('./styles/main.css');

var TeamsView = require('./views/teams_view.js');
var students = require('../data/students.js');

var app = () => {
  new TeamsView(students);
}

window.onload = app;