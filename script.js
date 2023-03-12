// header and hero section fix
let hdr_height = document.querySelector("header").offsetHeight;
document.querySelector(".hero-section").style.paddingTop = hdr_height+"px";

// for header class change
function setHeaderClass(){
    if(document.querySelector("html").scrollTop > 10){
        document.querySelector("header").classList.add("header-scrolled");
    }
    else{
        document.querySelector("header").classList.remove("header-scrolled");
    }
}
["load", "resize", "scroll"].forEach(function (evt) {
    window.addEventListener(evt, setHeaderClass);
  });

//slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    direction: 'horizontal',
    spaceBetween:16,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  