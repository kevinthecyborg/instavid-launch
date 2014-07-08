$(window).scroll(function() {
	$('#tagline').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+800) {
			$(this).addClass("slide-right");
		}
	});
});
$(window).scroll(function() {
	$('#highlight1').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+700) {
			$(this).addClass("fade-in");
		}
	});
});
$(window).scroll(function() {
	$('#highlight2').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+700) {
			$(this).addClass("fade-in delay-05");
		}
	});
});
$(window).scroll(function() {
	$('#highlight3').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+700) {
			$(this).addClass("fade-in delay-1");
		}
	});
});
$(window).scroll(function() {
	$('#free').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass("fade-in");
		}
	});
});
$(window).scroll(function() {
	$('#counter').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass("slide-right");
		}
	});
});
$(window).scroll(function() {
	$('#appstoreBtn').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass("slide-left");
		}
	});
});
$(window).scroll(function() {
	$('#shareText').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+700) {
			$(this).addClass("slide-right");
		}
	});
});
$(window).scroll(function() {
	$('#shareBtns').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+750) {
			$(this).addClass("slide-left");
		}
	});
});