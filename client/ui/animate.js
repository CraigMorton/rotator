window.onload = function(){

  var spinner = document.querySelector('div');

  counter = 0;

  var movePikachu = function(){
    spinner.style.backgroundPosition = '0% ' + counter + '%';
    counter = counter - 180;
  }

  var spin;

  spinner.onmouseenter = function(){
    spin = setInterval(movePikachu, 800);
  }

  spinner.onmouseleave = function(){
    clearInterval(spin);
  }

}