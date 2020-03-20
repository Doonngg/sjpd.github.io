$(function(){
	
	
	$("#ce li").on("touchstart",function(){
		$(this).animate({fontSize : "16px"},100).css("color","#707070");
		$(this).siblings().css({fontSize : "13px"},100).css("color","#D5D5D5");
		$(this).children("div").css("borderColor","#C6F2D9");
		$(this).siblings().children("div").css("borderColor","#f9f9f9");
		// console.log($(this).children("p").text());
	})
	
	
	
	let happyflag = 0;
	$("#happy").click(function(){
		if(happyflag == 0){
			$("#happy img").attr("src","img/bq/happy1.png");
			happyflag = 1;
		}else {
			$("#happy img").attr("src","img/bq/happy.png");
			happyflag = 0;
		}
	})
	let calmflag = 0;
	$("#calm").click(function(){
		if(calmflag == 0){
			$("#calm img").attr("src","img/bq/calm1.png");
			calmflag = 1;
		}else{
			$("#calm img").attr("src","img/bq/calm.png");
			calmflag = 0;
		}
		
	})
	let sadflag = 0;
	$("#sad").click(function(){
		if(sadflag == 0){
			$("#sad img").attr("src","img/bq/sad1.png");
			sadflag = 1;
		} else{
			$("#sad img").attr("src","img/bq/sad.png");
			sadflag = 0;
		}
		
	})
	let angerflag = 0;
	$("#anger").click(function(){
		if(angerflag == 0){
			$("#anger img").attr("src","img/bq/anger1.png");
			angerflag = 1;
		} else{
			$("#anger img").attr("src","img/bq/anger.png");
			angerflag = 0;
		}
		
	});
	
	$("#diaryText").focus(function(){
		$(this).text("");
	})
})