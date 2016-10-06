var TeamsView = require('./views/teams_view.js');
var students = require('../data/students.js');

app = () => {
  new TeamsView(students);
}

window.onload = app;