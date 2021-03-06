'use strict'
//= anime.min.js
//= slick.js
//= parallax.min.js
//= aos.js


function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

$(function() {

	AOS.init();

	$(document).ready(function($) {
		setTimeout(function () {
			$('.loader').fadeOut(600);
		}, 1500);
	});

	if (hasTouch()) { // remove all :hover stylesheets
	    try { // prevent exception on browsers not supporting DOM styleSheets properly
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

	// $('#wechat').modal({
	//   fadeDuration: 100
	// });

	$('.burger-ico').click(function(event) {
		$(this).toggleClass('active');
		$('.nav__burger').toggleClass('active');
	});

	$('.carousel__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
	    {
	      breakpoint: 824,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }],
		prevArrow: $('.prev-arr'),
		nextArrow: $('.next-arr')
	});

	$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[rel="modal:open"]')
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


    try {
		$(window).scroll(function () {
			var st = $(this).scrollTop();
			var team = $('.team__container').offset().top - $(window).height() / 1.5;

			// var roadmap = $('.roadmap').offset().top - $(window).height() / 1.5;

			// if (st > roadmap && ) {
			// 	$('.line').height(st + 500 - $('.line').offset().top)
			// }

			// if (st > team) {			
			// 	teamFade.play();
			// }

			// if($(window).width() > 768){
			// 	$('.content').css({
			// 		backgroundPositionY: (st - 3000) * 0.5,
			// 	});	
			// }
		})
    } catch(e) {
    	// statements
    }


    $('.content').parallax({
    	imageSrc: '../img/background__cycles.png',
		speed: 0.5,
	});
    var price = 0.000109891

	$('#eth').keyup(function(event) {
		var res = parseFloat($('#eth').val()) / price
		$('#opl').val(res.toFixed(2))
	});

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

	if($(window).width() < 768){
		$('.point__description__title').click(function(event) {
			$(this).parent().find('.point__description__text').slideToggle(400).parent().parent().siblings().each(function() {
				$(this).find('.point__description__text').slideUp(400)
			});
		});
	}else{
		$('.point__description').click(function(event) {
			$(this).toggleClass('active').siblings().removeClass('active').parent().siblings().each(function() {
				$(this).find('point__description').removeClass('active');
			});
		});
	}

	// Tokens Animation Ripple

	var logos = document.querySelectorAll('.token-anim')
	var anims = [];

	for (var i = logos.length - 1; i >= 0; i--) {
		anims[i] = anime({
			targets: logos[i],
			easing: 'linear',
			scale: 0.9,
			loop: true,
			direction: 'alternate',
			duration: 1000,
			autoplay: false,
		})
	}

	var itr = 0;
	var tokenAnim = setInterval(function(){
		if (itr < logos.length) {
			anims[itr].play();
			itr++;
		}else{
			clearInterval(tokenAnim);
		}
	}, 470)

	// var teamFade = anime({
	// 	targets: '.team__item',
	// 	delay: function(el, i, l) { return i * 100; },
	// 	opacity: 1,
 //    	easing: 'easeOutExpo',
 //    	autoplay: false,

	// })
	$('#feedback').click(function(event) {
		event.preventDefault()
		$('.nav__links').slideToggle(400);
	});

})