$(function() {

    $("head").append("<link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />");

    //anchor links


    $(".navbar-nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('nav li a').click(function () {
        $('nav li').removeClass('active');
        $(this).parent().addClass('active');
        return true;
    });

    //Scroll Top

    $('#scrollUp').mouseover(function () {
        $(this).animate({opacity: 0.65}, 100);
    }).mouseout(function () {
        $(this).animate({opacity: 1}, 100);
    }).click(function (e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: 1}, 1000);
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $('#scrollUp').fadeIn('fast');
        } else {
            $('#scrollUp').fadeOut('fast');
        }
    });

    //modal

    $('.order,.order-form').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400, function () {
            $('#modal-form').css('display', 'block');
            $('#modal-form').animate({opacity: 1, top: '20%'}, 200);
        });
    });

    $('.form-close').click(function () {
        $('#modal-form').animate({opacity: 0, top: '45%'}, 200,
            function () {
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
                $('.form-of-training, .practices, .course').find(".name, .price, .price .rub").removeClass("active");
            }
        );
    });

    $('.btn-mobile-menu').click( function(event){
        event.preventDefault();
        $(this).toggleClass('active');
        $('.left__sidebar').toggleClass('open');
    });




    $('.nav__link .nav__item').click(function () {
        $('.nav__item').removeClass('nav__item--current');
        $(this).addClass('nav__item--current');
        $('.nav__link').find(".nav__item-title, .nav__item-descr").removeClass('current');
        $(this).parents('.nav__link').find('.nav__item-title').toggleClass('current');
        $(this).parents('.nav__link').find('.nav__item-descr').toggleClass('current');
        return true;
    });


//filter

    $('.filter li > a').on('click', function (event) {
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

    $('#sort-1').styler();

    $('#sort-2').styler();

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

function getRandom(min, max){
    return Math.random() * (max - min) + min;
}

var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
    document.getElementsByTagName('html')[0].classList.add('safari');
}

// Remove click on button for demo purpose
Array.prototype.slice.call(document.querySelectorAll('.btn'), 0).forEach(function(bt) {
    bt.addEventListener('click', function(e) {
        e.preventDefault();
    });
});

initBt1();
initBt2();

// Button
function initBt1() {
    var bt = document.querySelectorAll('#component-1')[0];
    var turb = document.querySelectorAll('#filter-ripple-1 feImage')[0];
    var dm = document.querySelectorAll('#filter-ripple-1 feDisplacementMap')[0];

    bt.addEventListener('click', function(e) {
        TweenLite.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
        TweenLite.to(turb, 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
        TweenLite.fromTo(dm, 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
}

function initBt2() {
    var bt = document.querySelectorAll('#component-2')[0];
    var turb = document.querySelectorAll('#filter-ripple-2 feImage')[0];
    var dm = document.querySelectorAll('#filter-ripple-2 feDisplacementMap')[0];

    bt.addEventListener('click', function(e) {
        TweenLite.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
        TweenLite.to(turb, 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
        TweenLite.fromTo(dm, 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
}

