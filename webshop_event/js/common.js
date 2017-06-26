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
//导航栏
// var oMenuBox = document.getElementById('menu-box');
// var aLi = getClass('menu-btn',oMenuBox);
// for(var i=0; i<aLi.length; i++){
// 	aLi[i].onmouseover = function(){//划入试件
// 		// alert("hahah");
// 		// console.log(aLi[i]); //i = 2;
// 		//this  //对当前对象的引用
// 		var oUl = this.getElementsByTagName('ul'); 
// 		oUl[0].style.opacity = 100;
// 		oUl[0].style.filter='alpha(opacity=1)';
// 		oUl[0].style.top='56px';

// 	}
// 	aLi[i].onmouseout = function(){
// 		var oUl = this.getElementsByTagName('ul')[0];
// 		oUl.style.opacity = 0;
// 		oUl.style.filter='alpha(opacity=0)';
// 		oUl.style.top='80px';

// 	}
// }

//console.log(i);

function animate(elem, attr, callback){//动画
	clearInterval(elem.timer);
	elem.timer = setInterval(function(){
		var bStop = true;//一个标识位，true代表可以停止定时器，false代表不可不停止
		for(var prop in attr){//1:width
			var curr = parseInt(getStyle(elem, prop));
			if(prop == 'opacity'){
				curr = parseInt(getStyle(elem, prop)*100);
			}
			var speed = (attr[prop] -  curr) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if(curr != attr[prop]){
				bStop = false;
			}

			if(prop == 'opacity'){
				elem.style.opacity = (curr + speed) / 100;
				elem.style.filter = 'alpha(opacity='+(curr + speed)+')';
			}else{
				elem.style[prop] = curr + speed + 'px';
			}
		}
		if(bStop){
			clearInterval(elem.timer);
			callback && callback();
		}
	}, 30);//动画效果
}

function getStyle(elem, attr){//取元素的属性，不包括边距。
	if(elem.currentStyle){//IE浏览器取属性
		return elem.currentStyle[attr];//不能直接.attr。不然就取到了attr的属性。
		//而不是attr里的属性。
	}else{//chrom中取属性。
		return getComputedStyle(elem, false)[attr];
	}
}
var oMenuBox=document.getElementById('menu-box');
var aLi=oMenuBox.getElementsByTagName('li');
for(var i=0;i<aLi.length;i++){
	aLi.onclick=function(){
		aLi.className='selected';


	}

}








