$(function() {
	$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

	$(window).scroll(function () {
		var st = $(this).scrollTop();

		$('.content').css({
			backgroundPositionY: (st - 3000) * 0.5,
		});	
	})

	$('.advosors__descriptions__item').not('[data-advisor-id="0"]').hide();
	$('.advisor-pic').click(function(e){
		var index = $(this).attr('id').split('-')[1];
		var $description = $('.advosors__descriptions').find('[data-advisor-id="' + index + '"]');

		$description
		.delay(400)
		.fadeIn(400)
		.siblings()
		.fadeOut(400);
	});

	$('.roadmap__date').click(function() {
		$(this).parent().addClass('active').siblings().removeClass('active')
	});
})