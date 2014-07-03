//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  "use strict";
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Supersized plugin
jQuery(function($){
  "use strict";
	$.supersized({
	slide_interval          :   3000,		// Length between transitions
	transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed		:	700,		// Speed of transition
	slide_links			:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
	slides 			:  	[			// Slideshow Images
							{image : 'images/slide/1.jpg'},
							{image : 'images/slide/2.jpg'}
						]
	});
});

// Owlslider
$(document).ready(function() {
  "use strict";
	$("#owl-intro").owlCarousel({
	      navigation : true,
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem:true
	      // "singleItem:true" is a shortcut for:
	      // items : 1, 
	      // itemsDesktop : false,
	      // itemsDesktopSmall : false,
	      // itemsTablet: false,
	      // itemsMobile : false
	  });
});

// Owlslider
$(document).ready(function() {
  "use strict";
	$("#owl-fworks").owlCarousel({
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
     		// "singleItem:true" is a shortcut for:
		// items : 1,
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
     });
});

// Animated Number
jQuery(document).ready(function($) {
	"use strict";
	$('#facts ul').appear(function() {
	$('#fact1').animateNumber({ number: 120 }, 1500 );
	$('#fact2').animateNumber({ number: 250 }, 1500 );
	$('#fact3').animateNumber({ number: 650 }, 1500 );
	$('#fact4').animateNumber({ number: 7 }, 1500 );
	},{accX: 0, accY: -200});
});

// Skills
jQuery(document).ready(function($) {
	"use strict";
	$('.skills-wrap').appear(function() {
	$('.photoshop').css('width', '90%');
	$('.html5').css('width', '70%');
	$('.wpress').css('width', '80%');
	$('.svideo').css('width', '55%');
	},{accX: 0, accY: -70});
});

// Owlslider
$(document).ready(function() {
  "use strict";
    var owl = $("#owl-team");
	    owl.owlCarousel({
	    itemsCustom : [
				[0, 1],
				[450, 2],
				[600, 3],
				[700, 3],
				[1000, 4],
				[1200, 4],
				[1400, 4],
				[1600, 4]
				],
				navigation : false
		});
});

// Owlslider
$(document).ready(function() {
  "use strict";
    var owl = $("#owl-folio");
		owl.owlCarousel({
		itemsCustom : [
  				[0, 1],
				[450, 2],
				[600, 3],
				[700, 3],
				[1000, 4],
				[1200, 5],
				[1400, 5],
				[1600, 5]
				],
				navigation : true
	});
});

// Owlslider
$(document).ready(function() {
  "use strict";
	$("#owl-quotes").owlCarousel({
		autoPlay : 3000,
		stopOnHover : true,
		navigation:false,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
		autoHeight : true,
		transitionStyle:"fade"
	});
});

// Gmap
$(document).ready(function(){
  "use strict";
	$('#map_addresses').gMap({
		address: "Edificio Obarrio 60",
		zoom: 17,
		arrowStyle: 1,
		controls: {
		panControl: true,
		zoomControl: true,
		mapTypeControl: true,
		scaleControl: false,
		streetViewControl: true,
		overviewMapControl: false
	},
		markers:[
		{
			address: "Edificio Obarrio 60",
			html: " Edificio Obarrio 60, Piso 13,<br>Calle 60 Este Obarrio, Panamá <br>Tel:+ 507 6234-0650<br>Email: info@swordcode.com",
			popup: true,
			icon: {
				image: "images/marker.png",
				iconsize: [401, 199],
				iconanchor: [31,145]
				}
			}
		]
	});
});

// Scroll Plugin
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 220) {
		$("header").css({'padding':'15px 0'});
			} else {
		$("header").css({'padding':'35px 0'});
	}
});

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 220) {
		$("header").css({'height':'70px'});
			} else {
		$("header").css({'height':'auto'});
	}
});

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 220) {
		$("header").css({'background':'#000'});
			} else {
		$("header").css({'background':'transparent'});
	}
});

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 220) {
		$(".navbar-nav").css({'margin-top':'10px'});
			} else {
		$(".navbar-nav").css({'margin-top':'15px'});
	}
});

/* Parallax */
jQuery(document).ready(function($) {
  "use strict";
	$.stellar({
		horizontalOffset: 50
	});
});

/* Animation */
    $('[data-animated]').each(function() {
        $(this).addClass('animated-out');
    });

    $(window).scroll(function() {
        var scroll      = $(window).scrollTop();
        var height      = $(window).height();
        $('.animated-out[data-animated]').each(function() {
            var $this   = $(this);
            if(scroll + height >= $this.offset().top) {
                var delay   = parseInt($this.attr('data-animated'));
                if(isNaN(delay) || 0 === delay) {
                    $this.removeClass('animated-out').addClass('animated-in');
                } else {
                    setTimeout(function() {
                        $this.removeClass('animated-out').addClass('animated-in');
                    }, delay);
                }
            }
        });
});


/* Project Single Slider */
    $(document).ajaxComplete(function() {
    	"use strict";
    	$("#owl-project-single").owlCarousel({
    		navigation: false,
    		slideSpeed: 300,
    		paginationSpeed: 400,
    		singleItem: true
    		// "singleItem:true" is a shortcut for:
    		// items : 1, 
    		// itemsDesktop : false,
    		// itemsDesktopSmall : false,
    		// itemsTablet: false,
    		// itemsMobile : false
    	});
    });


// Onclick js
$(document).ready(function() {
	"use strict";
	$(".play-btn").on('click', function() {
	   $(this).hide();
	   $(".pause-btn").show();
	});
	$(".pause-btn").on('click', function() {
	   $(this).hide();
	   $(".play-btn").show();
	});
});

// Prettyphoto plugin
$("a[class^='prettyPhoto']").prettyPhoto({theme:'pp_default'});

