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
  })
})