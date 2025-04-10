export class Slider {
  constructor(selector) {
    this.slider = document.querySelector(selector);
    this.images = this.slider.querySelectorAll(".slider-image");
    this.prevBtn = this.slider.querySelector(".slider-btn.prev");
    this.nextBtn = this.slider.querySelector(".slider-btn.next");
    this.current = 0;

    this.init();
  }

  init() {
    this.showImage(this.current);
    this.prevBtn.addEventListener("click", () => this.prev());
    this.nextBtn.addEventListener("click", () => this.next());
  }

  showImage(index) {
    this.images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }

  prev() {
    this.current = (this.current - 1 + this.images.length) % this.images.length;
    this.showImage(this.current);
  }

  next() {
    this.current = (this.current + 1) % this.images.length;
    this.showImage(this.current);
  }
}

// Запуск
document.addEventListener("DOMContentLoaded", () => {
  new Slider(".slider");
});
