$(function(){

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
				}, 1000);
	
		});
	}
	/***************** Scroll to Top ********************/
	$(window).on('scroll', function() {
		if($('.header').length){
			var windowpos = $(window).scrollTop();
			var scrollLink = $('.scroll-top');
			if (windowpos >= 110) {
				scrollLink.addClass('open');
			} else {
				scrollLink.removeClass('open');
			}
		}
	});

   /***************** Menu-btn ********************/
   $(".menu__burger").click(function(event){
		$(".menu__burger,.menu").toggleClass("active");
		$("body").toggleClass("lock");
		});
 

	/***************** Mobile-menu ********************/
	$(".menu__item-dropdown").click(function(e){
		
		if($(".menu__item-dropdown").hasClass("active")){
			$(".menu__item-dropdown").not($(this)).removeClass("active");
		}
		$(this).toggleClass("active");
	});

	/***************** intro-slider ********************/
	$('.intro__slider').slick({
		dots: true,
		fade: true,
		cssEase: 'linear',
		lazyLoad: 'ondemand',
	});

	$('.testimonial__slider').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
	});

	$('.gallery__slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: 'ease-out',
		lazyLoad: 'ondemand',
		responsive: [
			{
			  breakpoint: 1000,
			  settings: {
				 slidesToShow: 4,
			  }
			},
			{
			  breakpoint: 850,
			  settings: {
				 slidesToShow: 3
			  }
			},
			{
			  breakpoint: 700,
			  settings: {
				 slidesToShow: 2,
			  }
			},
			{
				breakpoint: 500,
				settings: {
				  slidesToShow: 1,
				}
			}
		 ]
	});
});

window.onscroll = function() {headerFixed()};
var header = document.querySelector(".header__content");
var headerContainer = document.querySelector(".header__logo");
var sticky = header.offsetTop;

function headerFixed() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
    headerContainer.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    headerContainer.classList.remove("fixed");
  }
}