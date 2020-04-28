$(function(){

   /***************** Menu-btn ********************/
   $(".menu__burger").click(function(event){
		$(".menu__burger,.menu").toggleClass("active");
		});
 

	/***************** intro-slider ********************/
	$('.intro__slider').slick({
		dots: true,
		fade: true,
		cssEase: 'linear',
	});

	$('.testimonial__slider').slick({
		arrows: false,
		dots: true,
	});

	$('.gallery__slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: 'ease-out',
	});
});