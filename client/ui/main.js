var Spinner = require('../models/spinner.js');
var SpinnerView = require('./spinner_view.js');
var ButtonHandler = require('./button_handler.js');
var students = require('../../data/students.js');
var teams = require('../../data/teams.js');

var Main = function() {
  window.onload = this.init;
}

Main.prototype = {
  init: function(){
    var spinner = new Spinner(students, teams);
    var spinnerView = new SpinnerView(spinner);
    var buttonHandler = new ButtonHandler(spinnerView);
  }
}

module.exports = Main;
