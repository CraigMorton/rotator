var TeamsView = require('./views/teams_view.js');
var students = require('../data/students.js');

require("./styles/main.css");

var app = () => {
  new TeamsView(students);
}

window.onload = app;