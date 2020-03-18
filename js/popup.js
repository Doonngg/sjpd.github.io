$(function() {

	/* //右键禁用
	document.oncontextmenu = function(){
	    event.returnValue = false;
	} */

	// console.log(/^https?:\/\/\w+\.\w+.\w+/.test(url));
	$("#data3").click(function() {

	})



	//dock栏头像
	$("#bar").attr("src", $("#tx img").attr("src"));


	//输入框获取焦点
	$("#text").focus(function() {
		if ($("#text").val() == "输入内容") {
			$("#text").val("");
		}
		$("#text").css({
			"line-height": "16px",
			"padding": "16px",
			"text-align": "start",
			"color": "#000000",
			"font-size": "12px"
		})
	})
	
	var time = new Date();
	document.onkeydown = function send(e){
		if(e.keyCode == 13){
			if ($("#text").val() == "输入内容") {
				$("#text").val("");
			}
			//判断输入长度
			if ($("#text").val().length == 0 || /^\s+$/.test($("#text").val())) {
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
			var dmLi = $("<li></li>").attr("class", "dmLi");
			var dmLeft = $("<div></div>").attr("class", "dmLeft");
			dmLi.append(dmLeft);
			var dmRight = $("<div></div>").attr("class", "dmRight");
			dmLi.append(dmRight);
			//头像
			var dmImg = $("<img>").attr("class", "dmImg").attr("src", $("#tx img").attr("src"));
			dmLeft.append(dmImg);
			let dmRight1 = $("<div></div>").attr("class", "dmRight1");
			dmRight.append(dmRight1);
			var dmId = $("<p></p>").attr("class", "dmId").text($("#id").text());
			dmRight1.append(dmId);
			let report = $("<img>").attr("src", "img/report.png");
			dmRight1.append(report);
			var dmTime = $("<p></p>").attr("class", "dmTime").text(time.toLocaleString());
			dmRight.append(dmTime);
			if (/^https?:\/\/\w+\.\w+.\w+/.test($("#text").val())) {
				var dmUrl = $("<a></a>").attr("class", "dmUrl").attr("href", $("#text").val()).text("进入链接");
				dmRight.append(dmUrl);
			} else {
				var dmText = $("<p></p>").attr("class", "dmText").text($("#text").val());
				dmRight.append(dmText);
			}
			//把弹幕放进ul
			$("#tab1").append(dmLi);
			//滚轮保持底部
			$("ul").scrollTop($("ul")[0].scrollHeight);
			//弹幕数量统计
			$("#dmNum").text($("#tab1 li").length);
			$("#text").val("");
			
			$(".dmRight1 img").click(function() {
				console.log("举报");
			});
		};
	}
	


	//tab切换
	$(".input-center div").click(function() {
		$(this).css("background-color", "#EEEEEE");
		$(this).siblings().css("background-color", "#FFFFFF");
		const index = $(this).index();
		$("ul").eq(index).css("display", "block").siblings("ul").css("display", "none");
		$(".head").children().eq(index).show().siblings("div").hide();
	})



	//折叠部分
	let flag = 0;
	$("#oneself").click(function() {
		if (flag == 0) {
			$(".fold").slideDown(200);
			$(".input-top").hide();
			flag = 1;
		} else {
			$(".fold").slideUp(200, function() {
				$(".input-top").show();
			});
			flag = 0;
		}
	});


});
