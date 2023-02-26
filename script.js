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

//cursor js
const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {if (window.CP.shouldStopExecution(0)) break;
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
window.CP.exitedLoop(0);function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15 });

  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7 });

}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4 });

}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1 });

}