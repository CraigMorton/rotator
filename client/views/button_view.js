var Button = require('../models/button.js');

var ButtonView = function() {
  this.model = new Button();
  this.render(this.model);
}

ButtonView.prototype.render = function() {
  
}

module.exports = ButtonView;
