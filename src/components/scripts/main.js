import { CitySwitcher } from "../СitySwitcher/CitySwitcher";
import { Slider } from "../sliders";

const initCitySwitcher = () => {
  const switcher = new CitySwitcher();

  document.querySelectorAll(".city-switcher__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelector(".city-switcher__btn.active")
        .classList.remove("active");
      btn.classList.add("active");
      switcher.switchCity(btn.dataset.city);
    });
  });
};

const initScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".advantage-card").forEach((card) => {
    observer.observe(card);
  });
};

const initSlider = () => {
  const sliderExists = document.querySelector(".slider");
  if (sliderExists) {
    new Slider(".slider");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initCitySwitcher();
  initScrollAnimations();
  initSlider();
});
