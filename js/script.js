$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
  });
});

// const item = document.querySelector('.people__columns');
// item.classList.remove('ani');

// // Добавить наблюдение за появлением элемента
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       item.classList.add('ani');
//       return;
//     }
//     item.classList.remove('ani');
//   });
// });
// observer.observe(document.querySelector('.people__columns'));

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("ani");
    }
  });
}

let options = {
  threshold: [0.4],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".item-people");

for (let elm of elements) {
  observer.observe(elm);
}