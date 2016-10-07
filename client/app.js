require('./styles/main.css');

var students = require('../data/students.js');

var TeamsView = require('./views/teams_view.js');

var app = function() {
  var teamsView = new TeamsView(students);
}

window.onload = app;
