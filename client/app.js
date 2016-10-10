require('./styles/main.css');
var students = require('../data/students.js');
var teams = require('../data/teams.js');

var Spinner = require('./models/spinner.js');

var SpinnerView = require('./ui/spinner_view.js');
var TeamsView = require('./ui/teams_view.js');
var ButtonHandler = require('./ui/button_handler.js');

var app = function() {
  var spinner = new Spinner(students, teams);
  var spinnerView = new SpinnerView(spinner);
  var buttonHandler = new ButtonHandler(spinnerView);
}

window.onload = app;
