var iNow=0;
var timer;

$('.btns li').on('click',function(){
	$(this).addClass('selected').siblings().removeClass('selected')
	$('.carousel-imgs').animate({
		left:-960*$(this).index()
	},3000)
	iNow=$(this).index()
});
run()
$('.carousel').on('mouseover',function(){
	clearInterval(timer);
}).on('mouseout',function(){
	run();
})
function run(){
	timer=setInterval(function(){
		iNow++;
		if(iNow==$('.btns li').length){
			iNow=0;
		}
		$('.btns li').eq(iNow).trigger('click')
	},3000)
}

