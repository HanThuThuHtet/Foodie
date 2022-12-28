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

var toUp = {
  distance: '70px',
  origin: 'bottom',
  interval: 500,
  duration: 1000
};
ScrollReveal().reveal('.to-up', toUp);

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


let sections = ['about','services','menus','contact'];
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



//Menus
let menuLists = [
  {
    id:1,
    img : "./public/img/plate1.png",
    title: "Barbecue Salad",
    description: "Special Delicious Dish",
    price: 22.2,
    currency: "$"
  },
  {
    id:2,
    img : "./public/img/plate2.png",
    title: "Salad with fish",
    description: "Special Delicious Dish",
    price: 30.5,
    currency: "$"
  },
  {
    id:3,
    img : "./public/img/plate3.png",
    title: "Spinach Salad",
    description: "Special Delicious Dish",
    price: 45.2,
    currency: "$"
  }
];

let menuRow = document.getElementById("menuRow");
menuLists.forEach(function(menuList){
  let div = document.createElement("div");
  div.classList.add("col-8", "col-md-4", "col-lg-3");
  div.innerHTML = `
  <div class="card plate-card to-up mb-5">
  <img src="${menuList.img}" class="w-55 mx-auto d-block my-4" alt="">
  <div class="card-body">
    <p class="fw-bold mb-1">${menuList.title}</p>
    <p class="text-black-50 small">${menuList.description}</p>
    <div class="d-flex justify-content-between align-items-center">
      <p class="mb-0">${menuList.currency} ${menuList.price}</p>
      <button class="btn btn-primary">
        <i class="bi bi-cart-plus"></i>
      </button>
    </div>
  </div>
</div>
  `;
  menuRow.append(div)
})