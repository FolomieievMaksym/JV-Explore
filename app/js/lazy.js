let viewportTop = document.documentElement.clientHeight;
window.addEventListener("scroll", showPictures);
showPictures();
function showPictures(e) {
   document.querySelectorAll("[data-srcset]").forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportTop / 1) {
         el.setAttribute("srcset", el.getAttribute("data-srcset"));
      }
   });
   document.querySelectorAll("[data-src]").forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportTop / 1) {
         el.setAttribute("src", el.getAttribute("data-src"));
         // el.removeAttribute("style"); // ? А нужны ли вообще стили..?
      }
   });
   // document.querySelectorAll("[data-src-video]").forEach((el) => {
   //    if (el.getBoundingClientRect().top <= viewportTop / 1) {
   //       el.setAttribute("src", el.getAttribute("data-src-video"));
   //    }
   // });
}
