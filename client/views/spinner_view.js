var Spinner = require('../models/spinner.js');

var SpinnerView = function() {
  this.model = new Spinner();
  this.render(this.model);
}

SpinnerView.prototype.render = function() {

}

module.exports = SpinnerView;
