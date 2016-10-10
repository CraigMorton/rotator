var Spinner = require('../models/spinner.js');

var SpinnerView = function(spinner) {
  this.spinner = spinner;
  this.render();
}

SpinnerView.prototype = {
  render: function() {
    var spinnerContainer = document.querySelector('#spinner');
    for (var slot of this.spinner.slots) {
      var img = document.createElement('img');
      img.className = 'rotator';
      img.src = '/images/' + slot[0] + '.png';
      spinnerContainer.appendChild(img);
    }
  }
}

module.exports = SpinnerView;
