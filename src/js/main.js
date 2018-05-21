'use strict'
//= anime.min.js
//= slick.js


function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

$(function() {

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

	$('#presale-banner').modal({
		fadeDuration: 1000,
		fadeDelay: 0.50
	})

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

		if($(window).width() > 768){
			$('.content').css({
				backgroundPositionY: (st - 3000) * 0.5,
			});	
		}
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

	// function validateEmail(email) {
	// 	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// 		return re.test(email);
	// 	}

	// $.get('https://api.telegram.org/bot542094442:AAFyvENP47ULWOKNCo7DJX2RPmpu-AhsSu8/getUpdates', function(data) {
	// 	console.log(data);
	// });
	// function validate() {
	// 	var email = $(".subscribe__input").val();

	// 	if (validateEmail(email)) {
	// 		$.post('https://api.telegram.org/bot542094442:AAFyvENP47ULWOKNCo7DJX2RPmpu-AhsSu8/sendMessage?chat_id=-315434931&text='+ 'onPlace Korean; email: ' + $('.subscribe__input').val() + ';', function(data, textStatus, xhr) {
	// 		}).done(function () {
	// 			$('.subscribe__input').val('').attr('disabled', '');
	// 			alert('Thank you!')
	// 		});
	// 	} else {
	// 		alert(email + " is not valid email");
	// 	}
	// 	return false;
	// }

	// $(".subscribe__btn").click(function(e){
	// 	e.preventDefault();
	// 	validate()
	// });

})