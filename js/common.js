$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		closeBtn: false,
		helpers: {
			overlay: {
				locsked: false
			}
		}
	});

	$('.fancybox-gallery').fancybox({
		arrows: true,
		helpers: {
			title : {
            	type : 'float'
        	},
			overlay: {
				locked: false
			}
		}
	});
	
	//bxslider
	$('.reviews_slider ul').bxSlider({
	});

	 //scroll anchor
    $('.main_menu li a, .arrow_top').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-0},800);
		return false;
	});
});

