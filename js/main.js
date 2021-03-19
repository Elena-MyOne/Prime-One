//Adaptive functions
$(window).resize(function(event) {
	adative_function();
});
function adaptive_header(w,h) {
		var headerMenu=$('.header-menu');
		var headerLang=$('.header-top-lang');
	if(w<767){
		if(!headerLang.hasClass('done')){
			headerLang.addClass('done').appendTo(headerMenu);
		}
	}else{
		if(headerLang.hasClass('done')){
			headerLang.removeClass('done').prependTo($('.header-top'));
		}
	}
	if(w<767){
		if(!$('.header-bottom-menu').hasClass('done')){
			$('.header-bottom-menu').addClass('done').appendTo(headerMenu);
		}
	}else{
		$.each($('.header-bottom-menu'), function(index, val) {
			if($(this).hasClass('.header-bottom-menu__right')){
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
				}
			}else{
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.header-bottom__comumn').eq(0));
				}
			}
		});
	}
}
function adaptive_function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
	adaptive_header(w,h);
}

	adaptive_function();


//.header-menu__icon - it's a burger menu. This script is openning in from -120px for example when we press burger button menu
$('.header-menu__icon').click(function(event) {
	$(this).toggleClass('active');
	$('header-menu').toggleClass('active');
	if($(this).hasClass('active')){
		$('dody').data('scroll',$(window).scrollTop());
	}
		$('dody').toggleClass('lock');
	if(!$(this).hasClass('active')){
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});
