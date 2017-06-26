function getClass(clsName,context){
	var result = [];
	context = context || document;
	var arr = context.getElementsByTagName('*');
	for(var i=0; i<arr.length; i++){
				//class  保留字 .className
				//'aa bb' == 'aa'   'aacc'
		if(arr[i].className.indexOf(clsName) != -1){
			result.push(arr[i]);
		}
	}
			return result;
}
//在定义变量后取【0】或用的时候取0都可以 。
var btnBox=getClass("btns")[0];
var aBtns=btnBox.getElementsByTagName('li');
var aItem=getClass("carousel-item");
var aImgBox=getClass("carousel-imgs")[0];
var iNow=0;//表示第几张图
var timer;
var oCarousel=getClass("carousel")[0];
for(i=0;i<aBtns.length;i++){
	aBtns[i].index=i;
	aBtns[i].onclick=function(){//给abtns绑定点击试键
		change(this.index);//？？
		iNow=this.index;//？？
	}
}
function change(idx){//change函数，改变索引
	for(var j=0;j<aBtns.length;j++){
		aBtns[j].className='';//再次循环 置空
	}
	// animate(aImgBox,{//动画效果
	// 	left:-aItem[0].offsetWidth*idx//向左移
	// })
		aImgBox.style.left=-aItem[0].offsetWidth*idx+'px';
		
	//offsetwidth取元素属性包括边距
	aBtns[idx].className="selected";
}
oCarousel.onmouseover=function(){//鼠标滑动，清除滑动
	clearInterval(timer);
}
oCarousel.onmouseout=function(){//鼠标移开 开始运行。
	run();
}
function run(){//自动滑动
	timer=setInterval(function(){//？？？
		iNow++;
		if(iNow==aBtns.length) iNow=0;
		change(iNow);
	},2000);
}
run();


