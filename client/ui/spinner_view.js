var Spinner = require('../models/spinner.js');

var SpinnerView = function(spinner) {
  this.spinner = spinner;
  this.render();
}

SpinnerView.prototype = {
  spin: function() {
    //do the stuff
  },

  render: function() {
    var spinnerContainer = document.querySelector('#spinner');
    for (var slot of this.spinner.slots) {
      var img = document.createElement('img');
      img.className = 'rotator';
      img.src = '/images/pikachu.png';
      spinnerContainer.appendChild(img);
    }
  }
}

module.exports = SpinnerView;
