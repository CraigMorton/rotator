var Spinner = require('../models/spinner.js');

var SpinnerView = function(spinner) {
  this.spinner = spinner;
  this.spin();
  //this.render();
}

SpinnerView.prototype = {
  spin: function() {
    var element = document.querySelector(".squisher");
    if(!element) return;
    element.style.height = "180px";
    var originalHeight = 180;
    var currentHeight = 180;

    var squish = function() {
      element.style.height = currentHeight+"px";
      currentHeight -= 2;
      if(currentHeight >= 0) return setTimeout(squish,1);
      newSquish();
    }

    var newSquish = () => {
      currentHeight = originalHeight;
      element.setAttribute('class',"");
      if(!element.nextElementSibling) {
        return this.spin();
      }
      element = element.nextElementSibling;
      setTimeout(squish,1);
    }

    setTimeout(squish,1);
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
