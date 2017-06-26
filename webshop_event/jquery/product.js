
//下拉框
var $selBtn=$('.sel-btn')
var $selMenu=$('.sel-menu')
// $selBtn.on('mousedown',function(){
// 	$('.select-box').addClass('selected')
// })
// $selBtn.on('mouseup',function(){
// 	$('.select-box').removeClass('selected')
// 	$selMenu.toggle()
// })

// 	$('.sel-menu li').on('click',function(){
// 		$('p',$selBtn).html($(this).html())
// 		$selMenu.hide();
// 	})
// 	$(document).on('click',function(e){
// 		if(e.target!=$selBtn[0]&&e.target!=$('p',$selBtn)[0]&&e.target!=$('span',$selBtn)[0]){
// 			$selMenu.hide();
// 		}
// 	})

//选项卡
	// $('.btns-box li').on('click',function(){
	// 	$(this).addClass('active').siblings().removeClass('active')
	// 	$('.tab-item').eq($(this).index()).show().siblings().hide()
		
	// })

//弹层
var iNow=0;
$('.small-img li').on('click',function(){
	$('.dialog-box').show()
	$('.content').animate({
		top:'50%'
	},2000)
	$('.dialog-body img').attr('src',$(this).find('img').attr('src'));
	iNow=$(this).index()
})
$('.dialog-box').on('click',function(e){
	if(e.target==$('.dialog-box')[0]||e.target==$('.dialog-close')[0]){
		$(this).hide()
		$('.content').stop().css('top','-249px')
		// $('.content').animate().stop(true)
		
	}
})

$('.dialog-next').on('click',function(){
	
	var $nextImgSrc=$('.small-img img').eq(iNow).attr('src');
	// if($('.dialog-body img').length<2){
	// if(!$('.dialog-body img').is(":animated")){
		if($('.dialog-body img').length<2){
		 	iNow++;
		 	if(iNow==$('.small-img li').length){iNow=0;}
			$('.dialog-body img').before('<img src="'+$nextImgSrc+'"/>');
			$('.dialog-body img').eq(1).fadeOut(2000,function(){
				$(this).remove()
			})
		}
	// }
})



$('.dialog-prev').on('click',function(){
	
	var $nextImgSrc=$('.small-img img').eq(iNow).attr('src');
	// if($('.dialog-body img').length<2){
	// if(!$('.dialog-body img').is(":animated")){
	if($('.dialog-body img').length<2){
	 	iNow--;
	 	if(iNow==-1){iNow=$('.small-img li').length-1;}
		$('.dialog-body img').before('<img src="'+$nextImgSrc+'"/>');
		$('.dialog-body img').eq(1).fadeOut(2000,function(){
			$(this).remove()
		})
	}
})
$('.next-btn').on('click',function(){
	
	var $nextImgSrc=$('.small-img img').eq(iNow).attr('src');
	// if($('.dialog-body img').length<2){
	// if(!$('.dialog-body img').is(":animated")){
	if($('.dialog-body img').length<2){
	 	iNow++;
	 	if(iNow==$('.small-img li').length){iNow=0;}
		$('.dialog-body img').before('<img src="'+$nextImgSrc+'"/>');
		$('.dialog-body img').eq(1).fadeOut(2000,function(){
			$(this).remove()
		})
	}
})
$('.prev-btn').on('click',function(){
	
	var $nextImgSrc=$('.small-img img').eq(iNow).attr('src');
	// if($('.dialog-body img').length<2){
	// if(!$('.dialog-body img').is(":animated")){
	if($('.dialog-body img').length<2){
	 	iNow--;
	 	if(iNow==-1){iNow=$('.small-img li').length-1;}
		$('.dialog-body img').before('<img src="'+$nextImgSrc+'"/>');
		$('.dialog-body img').eq(1).fadeOut(2000,function(){
			$(this).remove()
		})
	}
})







	