let viewportTop = document.documentElement.clientHeight;
window.addEventListener("scroll", parallax);

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
parallax();
function parallax(e) {
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
         console.log(el.getBoundingClientRect().top);
         console.log("Прокрутка сверху = " + window.pageYOffset);
         // console.log("Высота вьюпорта = " + document.documentElement.clientHeight);
         parentHeight = el.getBoundingClientRect().height;
         console.log("Высота родителя = " + parentHeight);
         smallerElementHeight = smallerElement.getBoundingClientRect().height;
         console.log("Высота блока = " + smallerElementHeight);
         heightDifference = parentHeight - smallerElementHeight;
         console.log("Разница высот = " + heightDifference);
         smallerElementSpeed = parentHeight / smallerElementHeight;
         smallerElementSpeed = parentHeight / heightDifference;
         // smallerElementSpeed = 1.1;
         console.log("Скорость сдвига = " + smallerElementSpeed);
         tranfsorm = window.pageYOffset / smallerElementSpeed;
         currentTransform = parseInt(smallerElement.style.transform.match(/[-0-9.]+(?=px)/));
         console.log("Текущий трансформ = " + currentTransform);

         // ! Done
         if (
            currentTransform < heightDifference ||
            window.pageYOffset < heightDifference ||
            window.pageYOffset < currentTransform
         ) {
            smallerElement.style.transform = `translateY(${tranfsorm - 3}px)`;
         }
      }
   });
}
