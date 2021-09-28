$(function(){
	$('.slider__box').slick({
		prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow-l.svg" alt="left arrow">',
		nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow-r.svg" alt="right arrow">',

		responsive: [
			{
				breakpoint: 481,
				settings: {
					arrows: false
				}
			}
		]
	});

	$('.menu-btn').on('click', function(){
		$('.menu__list').toggleClass('active');
	});
});