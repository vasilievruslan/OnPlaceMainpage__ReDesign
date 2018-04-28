'use strict'
//= anime.min.js


function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
     	$(window).scroll(function() {
        	$('.content').css({
				backgroundPositionY: 0,
			});
     	});

     	$('.nav__logo').click(function(event) {
     		event.preventDefault();
     		$('.nav__list').toggleClass('active');
     	});
	    for (var si in document.styleSheets) {
	        var styleSheet = document.styleSheets[si];
	        if (!styleSheet.rules) continue;

	        for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
	            if (!styleSheet.rules[ri].selectorText) continue;

	            	if (styleSheet.rules[ri].selectorText.match(':hover')) {
	                	styleSheet.deleteRule(ri);
	           	}
	        }
	    }	
    } catch (ex) {}
}
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
		var team = $('.team__container').offset().top - $(window).height() / 1.5;

		// var roadmap = $('.roadmap').offset().top - $(window).height() / 1.5;

		// if (st > roadmap && ) {
		// 	$('.line').height(st + 500 - $('.line').offset().top)
		// }

		if (st > team) {			
			teamFade.play();
		}

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


	var teamFade = anime({
		targets: '.team__item',
		delay: function(el, i, l) { return i * 100; },
		opacity: 1,
    	easing: 'easeOutExpo',
    	autoplay: false,

	})
	$('#feedback').click(function(event) {
		event.preventDefault()
		$('.nav__links').slideToggle(400);

	});

	
})