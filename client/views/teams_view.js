var TeamsView = function(teams) {
  this.teams = teams;
  this.teamsRendered = 0;
}

TeamsView.prototype.createImage = function(student) {
  var newImage = document.createElement('img');
  newImage.src = '/images/' + student + '.jpg';
  return newImage;
}

TeamsView.prototype.displayTeam = function(team) {
  var container = document.querySelector('#teams');
  var teamContainer = document.createElement('div');

  for (var student of team) {
    var newImage = this.createImage(student);
    teamContainer.appendChild(newImage);
  }

  container.appendChild(teamContainer);
}

TeamsView.prototype.render = function() {
  if (!this.teams[this.teamsRendered]) return;  
  this.displayTeam(teams[this.teamsRendered]);
  this.teamsRendered++;
}

module.exports = TeamsView;
