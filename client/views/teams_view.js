var TeamsView = function(teams) {
  this.teams = teams;
  this.render(this.model);
}

TeamsView.prototype.displayStudents = function(students) {
  for (var student of students) {
    console.log(student);
  }
}

TeamsView.prototype.render = function() {
  for (var team of this.teams) {
    this.displayStudents(team);
  }
}

module.exports = TeamsView;
