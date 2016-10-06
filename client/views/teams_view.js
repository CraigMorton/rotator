var Teams = require('../models/teams.js');

var TeamsView = function() {
  this.model = new Teams();
  this.render(this.model);
}

TeamView.prototype.render = function() {

}

module.exports = TeamsView;
