require('./styles/main.css');
var students = require('../data/students.js');
var teams = require('../data/teams.js');

var Spinner = require('./models/spinner.js');
var SpinnerView = require('./views/spinner_view.js');
var TeamsView = require('./views/teams_view.js');

var app = function() {
  var spinner = new Spinner(students, teams);
  var spinnerView = new SpinnerView(spinner);
}

window.onload = app;
