'use strict';



$(window).on('load', function() { 
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});
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
  
  $(function () {
    $('.dropdown-menu a').click(function (e) {
        $(e.target).find('.dropdown-menu').toggle();
        
    });
});
//scroll v2.0
/*
$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});*/

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
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 500,
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

