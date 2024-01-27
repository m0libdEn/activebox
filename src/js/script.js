document.addEventListener('DOMContentLoaded', function() {
    let header = document.querySelector('.header')
    let hamburgerMenu = document.querySelector('.header__hamburger');
    let menu = document.querySelector('.header__menu');
    var headerOptions = document.querySelectorAll('.header__option');
    var headerLine = document.querySelector('.header__wrapper');
    var hamburger= document.querySelector('.header__hamburger-icon');
    var logo=document.querySelectorAll('.box');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    function handleScroll() {
            if (scrollPosition > 650) {
            headerOptions.forEach(function(option) {
                option.classList.add('scrolled-color');
            });
            logo.forEach(function(option){
                option.classList.add('scrolled-logo')
            })
            headerLine.classList.add('scrolled-line')
            hamburger.classList.add('scrolled-ham')
            
        } else {
            headerOptions.forEach(function(option) {
                option.classList.remove('scrolled-color');
            });
            logo.forEach(function(option){
                option.classList.remove('scrolled-logo')
            })
            headerLine.classList.remove('scrolled-line')
            hamburger.classList.remove('scrolled-ham')
        }
    }

window.addEventListener('scroll', handleScroll);
    
hamburgerMenu.addEventListener('click', toggleMenu);
function toggleMenu(){
    menu.classList.toggle('open');
    header.classList.toggle('open-header')
    hamburger.classList.remove('scrolled-ham')
}


var menuOptions = document.querySelectorAll('header__menu-option')
menuOptions.forEach(function(el){
    el.addEventListener('click', closeMenu)
})
function closeMenu(){
    menu.classList.remove('open')
    header.classList.remove('open-header')
}
});
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });