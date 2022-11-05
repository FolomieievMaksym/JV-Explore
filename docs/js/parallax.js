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
   el.style.transform = "translateY(1px)";
});
// parallax();
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
         console.log("Прокрутка сверху = " + window.pageYOffset);
         // console.log("Высота вьюпорта = " + document.documentElement.clientHeight);
         parentHeight = el.getBoundingClientRect().height;
         console.log("Высота родителя = " + parentHeight);
         smallerElementHeight = smallerElement.getBoundingClientRect().height;
         console.log("Высота блока = " + smallerElementHeight);
         smallerElementSpeed = parentHeight / smallerElementHeight;
         heightDifference = parentHeight - smallerElementHeight;
         console.log("Разница высот = " + heightDifference);
         tranfsorm = window.pageYOffset / smallerElementSpeed;
         currentTransform = parseInt(smallerElement.style.transform.match(/[-0-9.]+(?=px)/));
         console.log("Текущий трансформ = " + currentTransform);
         // if (tranfsorm < parentHeight - smallerElementHeight) {
         // }
         // if (window.pageYOffset < parentHeight) {
         if (
            (currentTransform < heightDifference && window.pageYOffset < heightDifference) ||
            window.pageYOffset < currentTransform
         ) {
            // if (heightDifference > currentTransform) {
            smallerElement.style.transform = `translateY(${tranfsorm}px)`;
         }
      }
   });
}
