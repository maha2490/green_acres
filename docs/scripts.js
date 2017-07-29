// scripts.js

$(window).scroll(function() {
		$('#one_left').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideLeft");
			}
		});
});

$(window).scroll(function() {
		$('#two_right').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");
			}
		});
});
