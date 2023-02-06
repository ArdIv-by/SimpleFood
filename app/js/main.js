$(function () {

  $('.slider-review').slick({
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="slider-review__arrow slider-review__arrow--prev"><svg><use xlink: href = "images/sprite.svg#icon-left"></use></svg><span class="lnr lnr-chevron-left"></span > </button>',
    nextArrow: '<button type="button"  class="slider-review__arrow slider-review__arrow--next"><svg><use xlink: href = "images/sprite.svg#icon-right"></use></svg><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.slider-review'
  });


  document.addEventListener('DOMContentLoaded', () => {

    //Mobile Menu
    const burger = document.querySelector('.burger'); //наша кнопка
    const mobileMenu = document.querySelector('.menu'); //мобильное меню
    const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('menu--active'); //когда меню открыто
      if (mobileMenu.classList.contains('menu--active')) { //Проверяем, есть ли у меню активный класс
        burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
        bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
      } else { //Когда нету активного класса у меню
        burger.classList.remove('burger--active'); //Возвращает в исходное состояние
        bodyLock.classList.remove('lock'); //Разрешаем скроллить
      }
    });
  });



});

var mixer = mixitup('.categories__content');