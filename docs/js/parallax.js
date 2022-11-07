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
      if (el.getBoundingClientRect().top <= viewportTop / 1) {
         if (
            el.firstElementChild.getBoundingClientRect().height >
            el.firstElementChild.nextElementSibling.getBoundingClientRect().height
         ) {
            smallerElement = el.firstElementChild.nextElementSibling;
         } else {
            smallerElement = el.firstElementChild;
         }
         console.clear();
         console.log("Высота экрана = " + viewportTop);
         console.log("Позиция в документе(Rect().top) = " + smallerElement.getBoundingClientRect().top);
         console.log("Прокрутка сверху(pageYOffset) = " + window.pageYOffset);
         parentHeight = el.getBoundingClientRect().height;
         console.log("Высота родителя = " + parentHeight);
         smallerElementHeight = smallerElement.getBoundingClientRect().height;
         console.log("Высота блока = " + smallerElementHeight);
         heightDifference = parentHeight - smallerElementHeight;
         console.log("Разница высот = " + heightDifference);
         smallerElementSpeed = parentHeight / heightDifference;
         console.log("Скорость сдвига(parentHeight / heightDifference) = " + smallerElementSpeed);
         tranfsorm = window.pageYOffset / smallerElementSpeed; // ! Home
         console.log("Трансформ = " + tranfsorm);
         currentTransform = parseInt(smallerElement.style.transform.match(/[-0-9.]+(?=px)/));
         console.log("Текущий трансформ на блоке = " + currentTransform);
         console.log(smallerElement);
         // ! home
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
//! BACKUP (ALMOST NORMAL)
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
parallaxImage();
function parallaxImage(e) {
   parallaxImages.forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportTop / 1) {
         el.style.opacity = "1";
         console.clear();
         console.log("Позиция в документе(Rect().top) = " + el.getBoundingClientRect().top);
         console.log("Прокрутка сверху(pageYOffset) = " + window.pageYOffset);
         elHeight = el.getBoundingClientRect().height;
         console.log("Высота блока = " + elHeight);
         elPosition = window.pageYOffset + el.getBoundingClientRect().top;
         console.log("Summ = " + elPosition);
         elSpeed = elHeight / el.nextElementSibling.getBoundingClientRect().height;
         console.log("Speed = " + elSpeed);
         tranfsorm = (window.pageYOffset / elPosition) * elHeight - elHeight;
         console.log("Трансформ = " + tranfsorm);
         console.log(el);

         // ! Products
         if (true) {
            el.style.transform = `translateY(${tranfsorm}px)`;
         }
      }
   });
}
