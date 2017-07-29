// scripts.js

$(window).scroll(function() {
		$('#one_left').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("fadeIn");
			}
		});
});

$(window).scroll(function() {
		$('#two_right').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("fadeIn");
			}
		});
});

$(window).scroll(function() {
		$('#three_text').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("fadeIn");
			}
		});
});

$(".social_icons").mouseenter(function(){
	$(this).addClass("bounce");
});
$(".social_icons").mouseleave(function(){
	$(this).removeClass("bounce");
});
