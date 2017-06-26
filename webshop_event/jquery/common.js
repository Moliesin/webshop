$('.menu-btn').hover(function(){
	$(this).find('.sub-menu').show().animate({
		top:80
	})
},function(){
	$(this).find('.sub-menu').hide().css({
		top:70
	})

})