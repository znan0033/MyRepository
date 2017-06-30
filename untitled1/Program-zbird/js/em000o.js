


$(function(){
	
	
	
	
	var arr = $("#input1").prop("checked",true);
	$("#input1").click(function(){
		if(arr){
			arr=false;
		}
		else{
			arr=true;
		}
	})
	
	$("#input2").click(function(){
		
		if(arr){
		
		alert("")
		window.location.href = "register.html";

		}
		else{
			alert("请勾选");
		}
	})










})