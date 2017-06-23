$(function() {
	
    $("head").append("<link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />");
	
	//anchor links
	
	$(".navbar-nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	
	$('nav li a').click(function () {
		$('nav li').removeClass('active');
		$(this).parent().addClass('active');
		return true;
	});
	
	//Scroll Top
	
	$('#scrollUp').mouseover(function(){
		$( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
	}).click(function(e){
		e.preventDefault();
		$('body,html').animate({ scrollTop: 1 }, 1000);
	});
	
	$(window).scroll(function(){
		if ( $(document).scrollTop() > 0 ) {
			$('#scrollUp').fadeIn('fast');
		} else {
			$('#scrollUp').fadeOut('fast');
		}
	});
	
	//modal
	
	$('.order,.order-form').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400, function(){
			$('#modal-form').css('display', 'block');
			$('#modal-form').animate({opacity: 1, top: '20%'}, 200);
		});
	});
	
	$('.form-close').click( function(){
		$('#modal-form').animate({opacity: 0, top: '45%'}, 200,
			function(){
				$(this).css('display', 'none');
				$('#overlay').fadeOut(400);
				$('.form-of-training, .practices, .course').find(".name, .price, .price .rub").removeClass("active");
			}
		);
	});

   /*function init() {
        [].slice.call(document.querySelectorAll('.nav')).forEach(function(nav) {
            var navItems = [].slice.call(nav.querySelectorAll('.nav__item')),
                itemsTotal = navItems.length,
                setCurrent = function(item) {
                    // return if already current
                    if( item.classList.contains('nav__item--current') ) {
                        return false;
                    }

                    // remove current
                    var currentItem = nav.querySelector('.nav__item--current');
                    currentItem.classList.remove('nav__item--current');

                    // set current
                    item.classList.add('nav__item--current');

                };

            navItems.forEach(function(item) {
                item.addEventListener('click', function() { setCurrent(item); });
            });
        });

        [].slice.call(document.querySelectorAll('.link-copy')).forEach(function(link) {
            link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
            new Clipboard(link);
            link.addEventListener('click', function() {
                link.classList.add('link-copy--animate');
                setTimeout(function() {
                    link.classList.remove('link-copy--animate');
                }, 300);
            });
        });
    }

    init();*/

    $('.nav__link .nav__item').click(function () {
    	$('.nav__item').removeClass('nav__item--current');
    	$(this).addClass('nav__item--current');
        $('.nav__link').find(".nav__item-title, .nav__item-descr").removeClass('current');
        $(this).parents('.nav__link').find('.nav__item-title').toggleClass('current');
        $(this).parents('.nav__link').find('.nav__item-descr').toggleClass('current');
        return true;
    });


//filter

    $('.filter li > a').on('click', function(event) {
        event.preventDefault();

        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        } else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });


    $('.filter > ul > li.has-sub > a').append('<span class="icon icon-mini-arr-down"></span>');

    $('.filter > ul > li > ul > li.has-sub > a').append('<span class="icon icon-mini-arr-down"></span>');

    $('select').styler();


    //change
	$('.form-of-training .order-form').click(function() {
		$('.form-of-training').find(".name, .price, .price .rub").removeClass("active");
		$(this).parents('.form-of-training').find(".name").toggleClass("active").fadeIn(400);
		$(this).parents('.form-of-training').find(".price, .price .rub").toggleClass("active").fadeIn(400);
	});
	
	$('.practices .order-form').click(function() {
		$('.practices').find(".name, .price, .price .rub").removeClass("active");
		$(this).parents('.practices').find(".name").toggleClass("active").fadeIn(400);
		$(this).parents('.practices').find(".price, .price .rub").toggleClass("active").fadeIn(400);
	});
	
	$('.course .order-form').click(function() {
		$('.course').find(".name, .price, .price .rub").removeClass("active");
		$(this).parents('.course').find(".name").toggleClass("active").fadeIn(400);
		$(this).parents('.course').find(".price, .price .rub").toggleClass("active").fadeIn(400);
	});
	
	new WOW().init();
    
    
    $('.fade').slick({
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    


    
    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
	$("#feadback-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('#feadback-form')[0].reset(
				setTimeout(function () {}, 1000)
			);
			
			$('#popUpMessage').removeClass('hiddenDiv');
			setTimeout(function () {
				$('#popUpMessage').addClass('hiddenDiv');
			}, 2000);
		});
		return false;
	});
});
