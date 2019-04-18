$(document).ready(function(){
	$(window).on('scroll',function(){
		if ($(window).scrollTop()){
			$('nav').addClass('nav_active');
		}else{
			$('nav').removeClass('nav_active');
		}
	});
});