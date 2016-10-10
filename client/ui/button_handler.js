var ButtonHandler = function(spinnerView) {
  this.spinnerView = spinnerView;

  var button = document.querySelector('button');
  button.onclick = () => {
    this.spinnerView.spin();
  }
}

module.exports = ButtonHandler;
