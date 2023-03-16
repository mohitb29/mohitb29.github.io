// header and hero section fix
let hdr_height = document.querySelector("header").offsetHeight;
document.querySelector(".hero-section").style.paddingTop = hdr_height+"px";

//AOS initialization
AOS.init();

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
    
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  