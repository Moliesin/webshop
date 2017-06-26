var oTbody=document.getElementsByTagName('tbody')[0];
var aTr=oTbody.getElementsByTagName('tr');
// var oCheck=aTr.getElementsByTagName('input')[0];
var oCheckAll=document.getElementById('checkAll');
var aCheckBtn=getClass('checkBtn',oTbody);
var oMenu=document.getElementById('menu');
for(var i=0;i<aTr.length;i++){
	// aTr[i].index=i;
	aTr[i].onclick=function(){
		var oCheck=this.getElementsByTagName('input')[0];
		if(this.className=='selected'){
			this.className='';
			oCheck.checked=false;
		}else{
			oCheck.checked=true;
			this.className='selected';
		}
//判断是否全被勾上
		var aCheckTr=getClass('selected',oTbody);
		if(aCheckTr.length==aTr.length){
			oCheckAll.checked=true;
		}else{oCheckAll.checked=false;}
	}
}
// //	全选,点checkall
// // oCheckAll.onclick=function(){
// // 	for(var i=0;i<aTr.length;i++){
// // 		aTr[i].className='selected';

// // 		if(this.checked==true){
// // 			aTr[i].className='selected'
// // 		}else{aTr[i].className='';}
// // 		aCheckBtn[i].checked=this.checked;
// // 	}
// // }
// // 全选，点tr
oMenu.onclick=function(e){
	var target=e.target||evevt.srcElement;
	if(target!=oCheckAll){
		oCheckAll.checked=!oCheckAll.checked;
	}
	for(var i=0;i<aTr.length;i++){
		if(oCheckAll.checked==true){
			aTr[i].className='selected';
		}else{
			aTr[i].className='';
		}
		aCheckBtn[i].checked=oCheckAll.checked;

	}
}

