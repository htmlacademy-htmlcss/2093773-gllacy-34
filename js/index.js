const slides = document.querySelectorAll('.slide');
const buttonPrev = document.querySelector('.slider-prev');
const buttonNext = document.querySelector('.slider-next');
const bullets = document.querySelectorAll('.slider-pagination-button');
const slidesAmount = slides.length;
let currentIndex = 0;

const onSlideChange = (index) => {
  const activeSlide = document.querySelector('.slide.is-active');
  const activeBullet = document.querySelector('.slider-pagination-button.is-active');

  document.body.style.backgroundColor = slides[index].dataset.color;
  slides.forEach((element) => (element.style.order = ''));
  activeSlide.classList.remove('is-active');
  slides[index].classList.add('is-active');
  slides[index].style.order = '-1';
  activeBullet.classList.remove('is-active');
  bullets[index].classList.add('is-active');
};

const onPrevButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slidesAmount - 1;
  }

  onSlideChange(currentIndex);
};

const onNextButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex++;

  if (currentIndex === slidesAmount) {
    currentIndex = 0;
  }

  onSlideChange(currentIndex);
};

const initSlider = () => {
  buttonPrev.addEventListener('click', onPrevButtonClick);
  buttonNext.addEventListener('click', onNextButtonClick);
  bullets.forEach((element, index) => element.addEventListener('click', () => onSlideChange(index)));
};

initSlider();
