$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
  });
});

const item = document.querySelector('.item-people');
item.classList.remove('ani');

// Добавить наблюдение за появлением элемента
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      item.classList.add('ani');
      return;
    }
    item.classList.remove('ani');
  });
});
observer.observe(document.querySelector('.people__columns'));