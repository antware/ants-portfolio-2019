// Hamburger menu animation
const animateBurger = (x) => {
  x.classList.toggle("change");
}

// Slide menu in and out with hamburger button
let burgerTrigger = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');
burgerTrigger.addEventListener('click', () => {
  menu.classList.toggle('slide');
})

// Slide menu in and out by clicking in one of the menu links
let menuItems = document.querySelectorAll('.nav-link');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menu.classList.toggle('slide');
    animateBurger(burgerTrigger);
  })
})

// jQuery Scripts for ScrollMagic and GSAP
$(document).ready(function () {
  // INit Scrollmagic
  let controller = new ScrollMagic.Controller();

  // loop through each skill
  $('.skills').each(function () {
    // build a scene
    let ourScene = new ScrollMagic.Scene({
      triggerElement: /*this.children[0]*/'.skill-line',
      reverse: false
    })
      .setClassToggle(this, 'slide') // add class to project01
      .addTo(controller);
  });

  console.log(this.children);
});

