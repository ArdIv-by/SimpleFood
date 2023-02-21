$(function () {

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');


    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  })


  $('.catalog__sort, .catalog__show, .product-item__num').styler();


  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__from').text(data.from)
      $('.filter-price__to').text(data.to)
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from)
      $('.filter-price__to').text(data.to)
    },
  });


  $('.slider-review').slick({
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="slider-review__arrow slider-review__arrow--prev"><svg><use xlink: href = "images/sprite.svg#icon-left"></use></svg><span class="lnr lnr-chevron-left"></span > </button>',
    nextArrow: '<button type="button" class="slider-review__arrow slider-review__arrow--next"><svg><use xlink: href = "images/sprite.svg#icon-right"></use></svg><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.slider-review'
  });

  $(".product-item__star, .product-tabs__star").rateYo({
    starWidth: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#FFB800",
    spacing: "6px",
    readOnly: true,
  });

  $(".product-tabs__rating-star").rateYo({
    starWidth: "16px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    spacing: "6px",
    readOnly: true,
  });

});

var swiper = new Swiper(".swiper", {
  slidesPerView: 'auto',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var mixer = mixitup('.categories__content, .catalog__content');