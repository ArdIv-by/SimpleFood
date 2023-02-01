$(function () {

  $('.slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><svg><use xlink: href = "images/sprite.svg#icon-left"></use></svg><span class="lnr lnr-chevron-left"></span > </button>',
    nextArrow: '<button type="button"  class="slider__arrow slider__arrow--next"><svg><use xlink: href = "images/sprite.svg#icon-right"></use></svg><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.slider'
  })


  
});

var mixer = mixitup('.categories__content');