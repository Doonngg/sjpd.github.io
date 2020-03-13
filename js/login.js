$(function(){
	
	$("#account").focus(function(){
		$(this).val("");
	})
	$("#password").focus(function(){
		$(this).val("");
		$(this).attr("type","password");
	})
	
	
	$("#account").blur(function(){
		if($("#account").val() == ""){
			$(this).val("请输入账号");
		}
	})

	
	//账号设置
	$("#zhuce").click(function() {
		chrome.tabs.create({
			url: 'https://www.baidu.com'
		});
	})
	
	
	$("#loginbtn").click(function(){
		console.log("发送登录请求");
		$("#login").hide();
		$("#cover").hide();
	})

})