'use strict';



$(window).on('load', function() { 
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

//scroll
if ($(window).width() > 992) {
	$(window).scroll(function(){ 
	   if ($(this).scrollTop() > 40) {
		  $('#navbar_top').addClass("fixed-top");
		  // add padding top to show content behind navbar
		  $('body').css('padding-top', $('.navbar').outerHeight() + 'px');

		  $('#nav').addClass("navbar-nav ml-auto");
		  // add padding top to show content behind navbar
		  $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
		}else{
		  $('#navbar_top').removeClass("fixed-top");
		  $('#nav').removeClass("navbar-nav ml-auto");
		   // remove padding top from body
		  $('body').css('padding-top', '0');
		}   
	});
  } // end if

//scroll btn
$(document).ready(function () {
if ($(window).width() < 992) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.scrollup').fadeIn();
           
        } else {
            $('.scrollup').fadeOut();
        }
    });
}
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

(function($) {

	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	$('.review-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
		autoplay: true
	});



	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
		}
	});


	$('.lan-prog').each(function() {
		var progress = $(this).data("lanprogesss");
		var ele      = '<span></span>';
		var ele_fade = '<span class="fade-ele"></span>';
		
		for (var i = 1; i <= 5; i++) {
			if(i <= progress){
				$(this).append(ele);
			} else {
				$(this).append(ele_fade);
			}
		}
	});


	/*------------------
		Popup
	--------------------*/
	$('.portfolio-item .port-pic').magnificPopup({
        items: [
      {
        src: 'img/portfolio/roche.png',
        title: 'Roche Cosmetics Section'
      },
        {
        src: '<div class="white-popup" style="text-align: center;font-size: 25px;">Roche Cosmetics Experience was on a Remote modality because of COVID <br/>La experiencia en Roche Cosmetics fue en modalidad Remota debido al COVID</div>', // HTML string
        type: 'inline'
      },
        {
        src: 'img/portfolio/vw-b.jpg',
        title: 'Volkswagen Section'
      },
      {
        src: 'img/portfolio/vw-v.mp4',
        type: 'iframe', // this overrides default type
        title: 'Volkswagen'
      },
      {
        src: 'img/portfolio/first.mp4',
        type: 'iframe', // this overrides default type
        title: 'First Day'
      },
        {
        src: 'img/portfolio/friends.mp4',
        type: 'iframe', // this overrides default type
        title: 'Volkswagen Friends'
      },
            {
        src: 'img/portfolio/induccion.mp4',
        type: 'iframe', // this overrides default type
        title: 'Volkswagen Induccion'
      },
            {
        src: 'img/portfolio/work.mp4',
        type: 'iframe', // this overrides default type
        title: 'Volkswagen'
      },
            {
        src: 'img/portfolio/area.jpg',
        title: 'Volkswagen Area'
      },
        {
        src: 'img/portfolio/love.mp4',
        type: 'iframe', // this overrides default type
        title: 'Volkswagen Car'
      },
        {
        src: 'img/portfolio/tasa.jpg',
        title: 'Bavaria Biergarten Section'
      },
          {
        src: 'img/portfolio/bb.mp4',
        type: 'iframe', // this overrides default type
        title: 'Volkswagen'
      },
    ],
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 500,
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>', // markup of counter
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
        }
	});




if($().circleProgress){

	//Set progress circle 1
	$("#progress1").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#ffffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 2
	$("#progress2").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#ffffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle white
	$("#progress3").circleProgress({
		value: 0.75,
		size: 175,
		thickness: 2,
		fill: "#ffffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle white
	$("#progress4").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#ffffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	$("#progress5").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#ffffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle skyblue
	$("#progress6").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#ffffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle white
	$("#progress7").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#ffffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle white
	$("#progress7").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#ffffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle white
	$("#progress8").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#ffffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
}

})(jQuery);

