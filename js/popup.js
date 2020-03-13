$(function() {

	/* //右键禁用
	document.oncontextmenu = function(){
	    event.returnValue = false;
	} */
	
	// console.log(/^https?:\/\/\w+\.\w+.\w+/.test(url));
	
	
	console.log($("#emoji").width());
	
	//dock栏头像
	$("#bar").attr("src",$("#tx img").attr("src"));
	

	//输入框获取焦点
	$("#text").focus(function() {
		$("#text").val("");
		$("#text").css({
			"line-height" : "16px",
			"padding" : "16px",
			"text-align" : "start",
			"color" : "#000000",
			"font-size" : "12px"
		})
	})


	
	//创建时间
	var time = new Date();
	//弹幕发射
	$("#send").click(function() {
		if ($("#text").val() == "输入内容") {
			$("#text").val("");
		}
		//判断输入长度
		if ($("#text").val().length == 0 || $("#text").val().indexOf("  ") >= 0 || $("#text").val()[0] == " ") {
			$("#tips").css("display", "block");
			setTimeout(function() {
				$("#tips").css("display", "none");
			}, 1000);
			return;
		} 
		//弹幕设置面板隐藏
		$(".dmset-show").css("display", "none");
		//弹幕数量统计显示
		$("#dn-num").fadeIn();
		//创建弹幕&设置弹幕样式
		var dmLi = $("<li></li>").attr("class","dmLi");
		var dmLeft = $("<div></div>").attr("class","dmLeft");
		dmLi.append(dmLeft);
		var dmRight = $("<div></div>").attr("class","dmRight");
		dmLi.append(dmRight);
		//头像
		var dmImg = $("<img>").attr("class", "dmImg").attr("src", $("#tx img").attr("src"));
		dmLeft.append(dmImg);
		var dmId = $("<p></p>").attr("class","dmId").text($("#id").text());
		dmRight.append(dmId);
		var dmTime = $("<p></p>").attr("class","dmTime").text(time.toLocaleString());
		dmRight.append(dmTime);
		if(/^https?:\/\/\w+\.\w+.\w+/.test($("#text").val())){
			var dmUrl = $("<a></a>").attr("class","dmUrl").attr("href",$("#text").val()).text("进入链接");
			dmRight.append(dmUrl);
		} else {
			var dmText = $("<p></p>").attr("class","dmText").text($("#text").val());
			dmRight.append(dmText);
		}
		
		//把弹幕放进ul
		$("ul").append(dmLi);
		//滚轮保持底部
		$("ul").scrollTop($("ul")[0].scrollHeight);
		//弹幕数量统计
		$("#dmNum").text($("li").length);
		$("#text").val("");
	});
	
	
	$(".input-center div").click(function(){
		$(this).css("background-color","#EEEEEE");
		$(this).siblings().css("background-color","#FFFFFF");
	})
	
	//折叠部分
	$("#oneself").click(function() {
		$(".input-oneself").slideToggle(200);
	});
	

});
