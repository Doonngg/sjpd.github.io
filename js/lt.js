$(function(){
	
	var nu = "  d  wad   "
	console.log()
		
	$("#createTie").click(function(){
		$(".fold").slideUp(200,function(){
			$(".sendTie").toggle();
		});
	});
	
	$("#sendTie-cancel").click(function(){
		$(".sendTie").toggle();
		$(".sendTie-bottom").val("");
	});
	
	const time = new Date();
	$(".sendTie-file").click(function(){
		let newImgBox = $("<div></div>").attr("class","linshi");
		$(".sendTie-top").append(newImgBox);
		let newImg = $("<img>").attr("class","newImg").attr("src","img/lt/2.jpg");
		$(".linshi").prepend(newImg);
		let newDelete = $("<div></div>").attr("class","newDelete");
		$(".linshi").append(newDelete);
		$(".linshi").removeClass().addClass("newImgBox");
		$(".newDelete").click(function(){
			$(this).parent().remove();
		});
	});
	
	$("#sendTie-send").click(function(){
		if($(".sendTie-bottom").val().length == 0 || /^\s+$/.test($(".sendTie-bottom").val())){
			$("#tips").css("display", "block");
			setTimeout(function() {
				$("#tips").css("display", "none");
			}, 1000);
			return;
		}
		let newTie = $("<li></li>").attr("class","newTie");
		$(".tab2").append(newTie);
		let newCenter = $("<div></div>").attr("class","newCenter");
		$(".newTie").append(newCenter);
		let newB = $("<b></b>").attr("id","newB").text($("#id").text());
		$(".newCenter").append(newB);
		let newP = $("<p></p>").attr("id","newP").text(time.toLocaleString());
		$(".newCenter").append(newP);
		newCenter.attr("class","lt-center");
		let newBottom = $("<div></div>").attr("class","newBottom");
		$(".newTie").append(newBottom);
		let newText = $("<p></p>").attr("id","newText").text($(".sendTie-bottom").val());
		$(".newBottom").append(newText);
		let openIcon = $("<img>").attr("id","openIcon").attr("src","img/open.png");
		$(".newBottom").append(openIcon);
		let newTop =$("<div></div>").attr("class","newTop");
		$(".newTie").append(newTop);
		let ltImgs = $("<div></div>").attr("class","ltImgs");
		$(".newTop").append(ltImgs);
		for(let i = 0; i < $(".newImg").length;i++){
			let img = $("<img>").attr("src",$(".newImg").attr("src"));
			$(".ltImgs").append(img);
		};
		ltImgs.attr("class","lt-imgs");
		newB.attr("class","newB");
		newP.attr("class","newP");
		newBottom.attr("class","lt-bottom");
		newCenter.attr("class","lt-center");
		newTop.attr("class","lt-top");
		newBottom.attr("class","lt-text");
		newTie.removeClass().attr("class","newTie-end");
		$(".tab2").scrollTop($(".tab2")[0].scrollHeight);
	});
	
})