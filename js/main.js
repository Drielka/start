$(function(){
$('.rewiews-slider').slick({
	infinite:true,
	slidesToShow:2,
	slidesToScroll:2,
	arrows:false,
	dots:true,
	responsive: [
	{
		breakpoint:1106,
		settings:{
	slidesToShow:1,
	slidesToScroll:1,
		}
	},
	]
});



$('.btn-menu').on('click', function(){
	$('.menu__list').slideToggle();
})
});