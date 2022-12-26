import './style.scss';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import "./node_modules/waypoints/lib/noframework.waypoints.js";

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


//Waypoints

// new Waypoint({
//   element: document.getElementById('home-id'),
//   handler: function(direction) {
//     let oldNavLink = document.querySelector(".nav-link .active");
//     if(oldNavLink != null){
//      oldNavLink.classList.remove("active");
//     }
//     let currentNavLink = document.querySelector(`[href='#home']`);
//     currentNavLink.classList.add('active');
//   },
//   offset: "10%" 
// })

// new Waypoint({
//   element: document.getElementById('about'),
//   handler: function(direction) {
//     let oldNavLink = document.querySelector(".nav-link .active");
//     oldNavLink.classList.remove("active");
//     let currentNavLink = document.querySelector(`[href='#about']`);
//     currentNavLink.classList.add('active');
//   },
//   offset: "25%" 
// })

new Waypoint({
  element: document.getElementById('home-id'),
  handler: function(direction) {
      let oldNavLink = document.querySelector(".nav-link.active");
      if(oldNavLink != null){
          oldNavLink.classList.remove("active");
      }
      let currentNavLink = document.querySelector(`[href="#home"]`);
      currentNavLink.classList.add('active');
  },
  offset: "10%"
});


let sections = ['about','services','menus'];
sections.forEach(function (section){
  new Waypoint({
      element: document.getElementById(section),
      handler: function(direction) {
          let oldNavLink = document.querySelector(".nav-link.active");
          oldNavLink.classList.remove("active");
          let currentNavLink = document.querySelector(`[href="#${section}"]`);
          currentNavLink.classList.add('active');
      },
      offset: "50%"
  })
})