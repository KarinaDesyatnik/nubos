$(function(){
	$('.btn-menu').click(function(){	
		$(this).toggleClass('active');
		$('.header__menu .menu').toggleClass('active');		
	});

$('.menu .menu-link').click(function(){	
		$('.header__menu .menu').removeClass('active');	
		$('.btn-menu').removeClass('active');		
	});

$('.slider').slick({
prevArrow: $('.prev'),
nextArrow: $('.next'),
slidesToShow: 2,
responsive: [
{
    breakpoint: 992,
    settings: {
    slidesToShow: 1,
   
    }
  },
]
});

$('.logo-slider').slick({
prevArrow: false,
nextArrow: false, 
slidesToShow: 4,
dots: true,
responsive: [
{
    breakpoint: 992,
    settings: {
    slidesToShow: 2,
    centerMode: true,
   
    }
  },
  {
    breakpoint: 675,
    settings: {
    slidesToShow: 1,
    centerMode: true,
   
    }
  },
]
});



});

// -------start mobil dropdown menu--------
if(window.innerWidth < 992) {
 $('.header__dropdown-link').click(function(){	
		$(this).toggleClass('active');		
	});
}
// -------end mobil dropdown menu--------


$(window).scroll(function() {
if ($(this).scrollTop() > 50){
$('.header__content').addClass("sticky");
$('.header__menu .menu').addClass("sticky");

}
else{
$('.header__content').removeClass("sticky");
$('.header__menu .menu').removeClass("sticky");
}
});
