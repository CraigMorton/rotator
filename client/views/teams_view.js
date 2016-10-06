var Teams = require('../models/teams');

var TeamsView = function() {
  this.model = new Team();
  this.render(this.model);
}

TeamView.prototype.render = function() {

}

module.exports = TeamsView;
