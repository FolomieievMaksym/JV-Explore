class Slider {
   constructor(slider) {
      this.slider = document.querySelector(`${slider}`);
      this.sliderWrapper = document.querySelector(`${slider}__wrapper`);
      this.sliderSlide = document.querySelectorAll(`${slider}__slide`);
   }
   setWidth(width) {
      this.slider.style.width = width + "px";
   }
}

// const slider = new Slider(".slider");
// slider.setWidth(300);
