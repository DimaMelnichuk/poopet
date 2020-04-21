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

});