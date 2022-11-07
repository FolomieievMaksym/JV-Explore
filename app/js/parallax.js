let viewportTop = document.documentElement.clientHeight;
if (window.innerWidth > 768) {
   window.addEventListener("scroll", parallaxHome);
}
let parallaxParent = document.querySelectorAll("[data-parallax-parent]");
let parallaxElement = document.querySelectorAll("[data-parallax-element]");
let smallerElement;
let smallerElementHeight;
let smallerElementSpeed;
let parentHeight;
let heightDifference;
let tranfsorm;
let currentTransform;
console.log(parallaxElement);

parallaxElement.forEach((el) => {
   el.style.transform = "translateY(0px)";
});
parallaxHome();
function parallaxHome(e) {
   parallaxParent.forEach((el) => {
      if (
         el.getBoundingClientRect().top <= viewportTop / 1 &&
         el.getBoundingClientRect().top + el.getBoundingClientRect().height > 0
      ) {
         if (
            el.firstElementChild.getBoundingClientRect().height >
            el.firstElementChild.nextElementSibling.getBoundingClientRect().height
         ) {
            smallerElement = el.firstElementChild.nextElementSibling;
         } else {
            smallerElement = el.firstElementChild;
         }
         parentHeight = el.getBoundingClientRect().height;
         smallerElementHeight = smallerElement.getBoundingClientRect().height;
         heightDifference = parentHeight - smallerElementHeight;
         smallerElementSpeed = parentHeight / heightDifference;
         tranfsorm = window.pageYOffset / smallerElementSpeed; // ! Home
         currentTransform = parseInt(smallerElement.style.transform.match(/[-0-9.]+(?=px)/));
         if (
            (currentTransform < heightDifference ||
               window.pageYOffset < heightDifference ||
               window.pageYOffset < currentTransform) &&
            window.pageYOffset < parentHeight
         ) {
            smallerElement.style.transform = `translateY(${tranfsorm}px)`;
         }
      }
   });
}

window.addEventListener("scroll", parallaxImage);
let parallaxImages = document.querySelectorAll("[data-parallax-image]");
let elHeight;
let elSpeed;
let elPosition;
parallaxImages.forEach((el) => {
   el.style.transform = "translateY(0px)";
   el.style.opacity = "0";
   el.style.transition = "opacity 2s ease 1s";
});

let viewNum;
parallaxImage();
function parallaxImage(e) {
   parallaxImages.forEach((el) => {
      if (window.innerWidth < 769) {
         viewNum = 0.9;
      } else {
         viewNum = 1;
      }
      if (
         el.getBoundingClientRect().top <= viewportTop / viewNum &&
         el.getBoundingClientRect().top + el.getBoundingClientRect().height > 0
      ) {
         el.style.opacity = "1";
         elHeight = el.getBoundingClientRect().height;
         elPosition = window.pageYOffset + el.getBoundingClientRect().top;
         elSpeed = elHeight / el.nextElementSibling.getBoundingClientRect().height;
         tranfsorm = (window.pageYOffset / elPosition) * elHeight - elHeight;
         el.style.transform = `translateY(${tranfsorm}px)`;
      }
   });
}

window.addEventListener("scroll", parallaxShip);
let parallaxShipInCircle = document.querySelectorAll("[data-parallax-ship]");
let shipHeight;
let shipSpeed;
let shipPosition;
parallaxShip();
function parallaxShip(e) {
   parallaxShipInCircle.forEach((el) => {
      if (
         el.getBoundingClientRect().top <= viewportTop / 0.9 &&
         (el.getBoundingClientRect().top + el.getBoundingClientRect().height) / 2 > 0
      ) {
         shipHeight = el.getBoundingClientRect().height;
         shipPosition = window.pageYOffset + el.getBoundingClientRect().top;
         tranfsorm = (window.pageYOffset / shipPosition) * shipHeight - shipHeight;
         el.style.transform = `translate(${tranfsorm}px, -50%)`;
      }
   });
}

//! BACKUP
// parallaxImage();
// function parallaxImage(e) {
//    parallaxImages.forEach((el) => {
//       if (el.getBoundingClientRect().top <= viewportTop / 1) {
//          console.clear();
//          console.log("Позиция в документе(Rect().top) = " + el.getBoundingClientRect().top);
//          console.log("Прокрутка сверху(pageYOffset) = " + window.pageYOffset);
//          elHeight = el.getBoundingClientRect().height;
//          console.log("Высота блока = " + elHeight);
//          elPosition = window.pageYOffset + el.getBoundingClientRect().top;
//          console.log("Summ = " + elPosition);
//          elSpeed = elHeight / el.nextElementSibling.getBoundingClientRect().height;
//          console.log("Speed = " + elSpeed);
//          tranfsorm = (window.pageYOffset / elPosition) * elHeight - elHeight / elSpeed;
//          console.log("Трансформ = " + tranfsorm);
//          console.log(el);

//          // ! Products
//          if (true) {
//             el.style.transform = `translateY(${tranfsorm}px)`;
//          }
//       }
//    });
// }
