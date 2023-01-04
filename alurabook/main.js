const menu = document.querySelector('.icon-menu');
const menu_mobile = document.querySelector('.menu-mobile');
const menu_desktop = document.querySelector('.categoria')

function abrirMenu(){
    menu.classList.toggle('ativo');
    menu_mobile.classList.toggle('menu-mobile-ativo');
    
}
function abrirCategoria(){
  // menu_desktop.classList.toggle('ativo');
  menu_mobile.classList.toggle('menu-mobile-ativo');
  
}



const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400,
  spaceBetween: 10,
  slidesPerView:3,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },


});