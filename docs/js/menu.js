const body = document.querySelector("body");
const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
// ! Burger

body.addEventListener("click", burgerToggle);
function burgerToggle(e) {
   if (e.target.closest(".burger")) {
      if (burger.classList.contains("active")) {
         closeBurger();
      } else {
         openBurger();
      }
   } else if (!e.target.closest(".burger") && !e.target.closest(".menu__list")) {
      closeBurger();
   }
}
function openBurger() {
   body.classList.add("lock");
   header.classList.add("active");
   burger.classList.add("active");
   menu.classList.add("active");
   window.addEventListener("scroll", closeBurger);
}
function closeBurger() {
   body.classList.remove("lock");
   header.classList.remove("active");
   burger.classList.remove("active");
   menu.classList.remove("active");
   window.removeEventListener("scroll", closeBurger);
}

// ! <main></main>
document.querySelector("main > section:first-child").style.paddingTop = header.scrollHeight + "px";

// ! Header

const headerToHide = document.querySelectorAll("[data-to-hide]");
headerToHide.forEach((el) => {
   el.style.overflow = "hidden";
   el.style.transition = "height 0.3s ease 0s";
});

window.addEventListener("scroll", hideHeaderPart);
hideHeaderPart();
function hideHeaderPart() {
   if (window.pageYOffset > header.scrollHeight / 2) {
      headerToHide.forEach((el) => {
         el.style.height = "0px";
      });
      header.style.opacity = "0.95";
   } else if (window.pageYOffset < header.scrollHeight) {
      headerToHide.forEach((el) => {
         el.style.height = el.scrollHeight + "px";
      });
      header.style.opacity = "1";
   }
}
