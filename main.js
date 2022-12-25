import './style.scss';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';

//typed js
var options = {
    strings: ['Food ...', 'Drink ...'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 3000,
    loop: true //infinity
  };
  
  var typed = new Typed('.element', options);

//scroll reveal
  var toDown = {
    distance: '50px',
    origin: 'top',
    interval: 500,
    duration: 1000
};
ScrollReveal().reveal('.to-down', toDown);

var toRight = {
    distance: '50px',
    origin: 'left',
    interval: 300,
    duration: 800
};
ScrollReveal().reveal('.to-right', toRight);

var toLeft = {
    distance: '50px',
    origin: 'right',
    interval: 300,
    duration: 800
};
ScrollReveal().reveal('.to-left', toLeft);

