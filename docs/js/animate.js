let viewportHeight = document.documentElement.clientHeight;

const itemsToAnimate = document.querySelectorAll("[data-animate]");
const itemsToAnimateFromTop = document.querySelectorAll("[data-animate-from-top]");
const itemsToAnimateFromBottom = document.querySelectorAll("[data-animate-from-bottom]");
const itemsToAnimateFromLeft = document.querySelectorAll("[data-animate-from-left]");
const itemsToAnimateFromRight = document.querySelectorAll("[data-animate-from-right]");
const itemsToAnimateScale = document.querySelectorAll("[data-animate-scale]");

// ? Базовые стили для анимируемых элементов
itemsToAnimateFromTop.forEach((el) => {
   el.style.transform = "translateY(-150%)";
});
itemsToAnimateFromBottom.forEach((el) => {
   el.style.transform = "translateY(150%)";
});
itemsToAnimateFromLeft.forEach((el) => {
   el.style.transform = "translateX(-120%)";
});
itemsToAnimateFromRight.forEach((el) => {
   el.style.transform = "translateX(120%)";
});
itemsToAnimateScale.forEach((el) => {
   el.style.transform = "scale(0.8)";
   el.style.opacity = "0";
   el.style.transitionProperty = "transform, opacity";
   el.style.transitionDuration = "1s, 2s";
   el.style.transitionDelay = "0s, 0s";
   el.style.transitionTimingFunction = "ease, ease";
});

itemsToAnimate.forEach((el) => {
   // el.parentElement.style.overflow = "hidden";
   el.style.opacity = "0";
   // el.style.transform = "translateY(-120%)";
   el.style.transitionProperty = "transform, opacity";
   el.style.transitionDuration = "1s, 2s";
   el.style.transitionDelay = "0s, 0s";
   el.style.transitionTimingFunction = "ease, ease";
});

// // ? Задержка для анимируемых элементов каждого последующего слайда
// if (qs(".step3__swiper")) {
//    const ster3Slides = qs(".step3__swiper .swiper-wrapper").children;
//    let transitionDelay = 0;
//    for (let i = 0; i < ster3Slides.length; i++) {
//       let myLi = ster3Slides[i].firstElementChild.children[1].children;
//       for (let j = 0; j < myLi.length; j++) {
//          myLi[j].style.transitionDelay = `${transitionDelay}ms`;
//       }
//       transitionDelay += 200;
//    }
// }

// ? Анимация
window.addEventListener("scroll", showAnimatedItems);
function showAnimatedItems(e) {
   itemsToAnimate.forEach((el) => {
      if (window.innerWidth < 769) {
         if (el.getBoundingClientRect().top <= viewportHeight / 1.2) {
            el.style.transform = "translate(0)";
            el.style.opacity = "1";
         }
      } else {
         if (el.getBoundingClientRect().top <= viewportHeight / 1.3) {
            el.style.transform = "translate(0)";
            el.style.opacity = "1";
         }
      }
   });
   itemsToAnimateScale.forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportHeight / 1.15) {
         el.style.transform = "scale(1)";
         el.style.opacity = "1";
      }
   });
   itemsToAnimateFromBottom.forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportHeight / 1) {
         el.style.transform = "translate(0)";
         el.style.opacity = "1";
      }
   });
}
