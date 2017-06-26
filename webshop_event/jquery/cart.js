
var flag=true;//没有被全选。
$('#content tbody tr').on('click',function(){
	$(this).toggleClass('selected')
	$(this).find(":checkbox").prop('checked',$(this).hasClass('selected'))
	flag=true;
	$('#content tbody tr').each(function(index,elem){
		if(!$(this).hasClass('selected')){
			flag=false;
		}

	$('#checkAll').prop('checked',flag);
	})
})
$('#checkAll').on('click',function(){
	if(this.checked){
		$('#content tbody tr').addClass('selected')
		$('#content tbody tr :checkbox').prop('checked',true)
	}else{
		$('#content tbody tr').removeClass('selected')
		$('#content tbody tr :checkbox').prop('checked',false)

	}
})





















