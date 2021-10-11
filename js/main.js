
// *всплывающий попап при нажатии на плей видео

$(function () {
	$('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	// *всплывающий попап при нажатии на плей видео== конец


	// *слайдер slick - section gallery

	$('.gallery__slider').slick({
		prevArrow:'<button type="button" class="slick-btn slick-prev"><img src="images/svg/slider-arrow-prep.svg" alt=""></button>',
		nextArrow:'<button type="button" class="slick-btn slick-next"><img src="images/svg/slider-arrow-next.svg" alt=""></button>',
	}
	);

	// всплывающий попап галлереи

	$('.gallery__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},

	});
//  *Гамбургер меню

 $('.menu__btn').on('click', function() {
	$('.menu__list').toggleClass('menu__list--active')
 });

 // counter
 $('.tour__info-item-num').each(function () {
   var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
   $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
   }, {
      duration: 5000,
      step: function (func) {
         $(this).text(parseFloat(func).toFixed(size));
      }
   });
});


});

