// $('.exit, .model-wrapper').click(function() {
// 	$('.model-wrapper').fadeOut(2000);
// 	$('body').css('overflow','auto');	
// });


// $('.open').click(function() {
// 	$('.model-wrapper').fadeIn(2000);
// 	$('body').css('overflow','hidden');
// });

// $('.model').click(function(event) {
// 	event.stopPropagation();

// });

$('.yes').click(function(){
	$('.popup-wrapper').fadeOut(1000);
});

$('nav h1').hide();

$('nav h1').fadeIn(3000);

$('nav a').hide();

$('nav').hover(function(){
	$('nav a').slideToggle(500);
});






