<<<<<<< HEAD
var Teams = require('../models/teams');

var TeamsView = function() {
  this.model = new Team();
  this.render(this.model);
}

TeamView.prototype.render = function() {

=======
var TeamsView = function(teams) {
  this.teams = teams;
}

TeamsView.prototype = {
  createImage: function(student) {
    var newImage = document.createElement('img');
    newImage.src = '/images/' + student + '.jpg';
    return newImage;
  },

  displayTeam: function(team) {
    var container = document.querySelector('#teams');
    var teamContainer = document.createElement('div');

    for (var student of team) {
      var newImage = this.createImage(student);
      teamContainer.appendChild(newImage);
    }

    container.appendChild(teamContainer);
  },

  render: function() {
    for (var team of this.teams) {
      this.displayTeam(team);
    }
  }
>>>>>>> develop
}

module.exports = TeamsView;
