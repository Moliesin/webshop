function getClass(clsName,context){
	var result = [];
	context = context || document;
	var arr =context.getElementsByTagName('*');
	for(var i=0; i<arr.length; i++){
				//class  保留字 .className
				//'aa bb' == 'aa'   'aacc'
		if(arr[i].className.indexOf(clsName) != -1){
			result.push(arr[i]);
		}
	}
			return result;
}

//选项卡
var oTabBox=document.getElementById("tab-box"),
	aLi=oTabBox.getElementsByTagName("li"),//找到main-menu
	aDiv=getClass('tab-item',oTabBox);
	for(var i=0;i< aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			var oDiv=aDiv[this.index];
			for(var j=0;j<aDiv.length;j++){
				aDiv[j].style.display='none';
				aLi[j].className="";
			}
			this.className='active';
			aDiv[this.index].style.display='block';
		}
	}


//下拉框
var oSelBox=getClass('select-box')[0];
var oSelBtn=getClass('sel-btn',oSelBox)[0];
var aSelMenu=getClass("sel-menu",oSelBox)[0];
var aOption=aSelMenu.getElementsByTagName('li');
var oP=oSelBtn.getElementsByTagName('p')[0];
var oSpan=oSelBtn.getElementsByTagName('span')[0];

oSelBtn.onmousedown=function(){
	oSelBox.className='select-box selected';
	
}
oSelBtn.onmouseup=function(){
	oSelBox.className='select-box';
	if(aSelMenu.style.display=='none'||aSelMenu.style.display==""){
		aSelMenu.style.display='block';
	}else aSelMenu.style.display="none";
}
for(i=0;i<aOption.length;i++){
	aOption[i].onclick=function(){
		oP.innerHTML=this.innerHTML;
// 事件源 点击的事件
		aSelMenu.style.display='none';
	}
}//就是事件源
// 事件处理函数 function
// 事件
// 事件冒泡。 点击子元素会触发父元素的事件
document.body.onclick=function(e){
	// e.target||event.srcElement
	var target=e.target;
	if(target!=oSelBtn && target!=oP &&target!=oSpan){
		aSelMenu.style.display='none';
	}
}
//弹层
var oSmallImg=getClass('small-img')[0];
var aDialogLi= oSmallImg.getElementsByTagName('li');
var oDialogBox=getClass('dialog-box')[0];
var oDialogBody=getClass('dialog-body')[0];
var oDialogClose=getClass('dialog-close')[0];
var oDialogPrev=getClass('dialog-prev')[0];
var oDialogNext=getClass('dialog-next')[0];
var iNow=0;
var oNextBtn=getClass('next-btn')[0];
var oPrevBtn=getClass('prev-btn')[0];
var oSlideShow=getClass('slide-btn')[0];
var timer;
var oContent=getClass('content',oDialogBox)[0];
var animation;
for(var i=0;i<aDialogLi.length;i++){
	aDialogLi[i].index=i;
	aDialogLi[i].onclick=function(){
		var oDialogImg=oDialogBody.getElementsByTagName('img')[0];
		var oImg=this.getElementsByTagName('img')[0];
		oDialogBox.style.display='block';
		oDialogImg.src="";
		oDialogImg.src=oImg.src;
		oContent.style.animation='show 1s ease forwards';
		iNow=this.index;
	}
}
oDialogBox.onclick=function(e){
	var target=e.target||event.srcElement;
	if(target==oDialogBox||target==oDialogClose){
		oDialogBox.style.display='none';
	}
}
oDialogPrev.onmouseover=function(){
	console.log('hahaha')
}
oDialogPrev.onclick=function(){
	iNow--;
	if(iNow==-1){
		iNow=aDialogLi.length-1;
	}

	slideNext();
}
oDialogNext.onclick=function(){
	iNow++;
	if(iNow==aDialogLi.length){
		iNow=0;
	}
	slideNext();
}
function slideNext(){
	var NextLi=aDialogLi[iNow];//取到下一个li
	var nextSrc=NextLi.getElementsByTagName('img')[0].src;//取到下一个li里图片的src属性
	var oImg=document.createElement('img');//创建新的img
	oImg.src=nextSrc;
	var oldImg=oDialogBody.children[0];//获取原有图片
	oDialogBody.insertBefore(oImg,oldImg);//插入一张新图，放在原有图片前
	oldImg.style.animation='hide 1s ease forwards';//原图片动画隐藏
	setTimeout(function(){//原图片隐藏以后remove掉
		oDialogBody.removeChild(oldImg);
	},1000);
}
oPrevBtn.onclick=function(){
	iNow--;
	if(iNow==-1){
		iNow=aDialogLi.length-1;
	}
	// var prevLi=aDialogLi[iNow];
	slideNext()
}
oNextBtn.onclick=function(){
	iNow++;
	if(iNow==aDialogLi.length){
		iNow=0;
	}
	// var nextLi=aDialogLi[iNow];
	slideNext();
}
oSlideShow.onclick=function(){
	if(timer){
		clearInterval(timer);
	}else{
		run();
	}
}
function run(){//设置计时器
	timer=setInterval(function(){
		oDialogNext.onclick();
	} ,3000);
}
// oDialogPrev.onmouseover=function(){
// 	oDialogPrev.style.display='none';
// }

// oDialogPrev.onmouseout=function(){
// 	oDialogPrev.style.display='block';
// }
// oDialogNext.onmouseover=function(){
// 	oDialogNext.style.display='none';
// }

// oDialogNext.onmouseout=function(){
// 	oDialogNext.style.display='block';
// }
