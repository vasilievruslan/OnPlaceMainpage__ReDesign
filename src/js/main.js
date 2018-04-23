$(function() {
	$(window).scroll(function () {
		var st = $(this).scrollTop();

		$('.content').css({
			backgroundPositionY: (st - 3000) * 0.5,
		});	
	})
})