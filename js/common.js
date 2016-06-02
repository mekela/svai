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



$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('m_active');
        })
        $(this).addClass('m_active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.main_menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.main_menu ul li a').removeClass("m_active");
            currLink.addClass("m_active");
        }
        else{
            currLink.removeClass("m_active");
        }
    });
}