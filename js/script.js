$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
  });
});

const square = document.querySelector('.item-people');
square.classList.remove('square-transition');

// Добавить наблюдение за появлением элемента
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('ani');
      return;
    }
    square.classList.remove('ani');
  });
});
observer.observe(document.querySelector('.people__columns'));