$(function() {

	
	
	$("#souTie").focus(function(){
		$(this).val("");
	})
	

	$("#createTie").click(function() {
		$(".fold").slideUp(200, function() {
			$(".sendTie").toggle();
		});
	});

	$("#sendTie-cancel").click(function() {
		$(".sendTie").toggle();
		$(".sendTie-bottom").val("");
	});

	const time = new Date();
	$(".sendTie-file").click(function() {
		let newImgBox = $("<div></div>").attr("class", "linshi");
		$(".sendTie-top").append(newImgBox);
		let newImg = $("<img>").attr("class", "newImg").attr("src", "img/lt/2.jpg");
		$(".linshi").prepend(newImg);
		let newDelete = $("<div></div>").attr("class", "newDelete");
		$(".linshi").append(newDelete);
		$(".linshi").removeClass().addClass("newImgBox");
		$(".newDelete").click(function() {
			$(this).parent().remove();
		});
	});

	$("#sendTie-send").click(function() {
		if ($(".sendTie-bottom").val().length == 0 || /^\s+$/.test($(".sendTie-bottom").val())) {
			$("#tips").css("display", "block");
			setTimeout(function() {
				$("#tips").css("display", "none");
			}, 1000);
			return;
		}
		let newTie = $("<li></li>").attr("class", "newTie");
		$("#tab2").prepend(newTie);
		/* let newCenter = $("<div></div>").attr("class","newCenter");
		$(".newTie").append(newCenter);
		let newB = $("<p></p>").attr("id","newB").text($("#id").text());
		$(".newCenter").append(newB);
		let newP = $("<p></p>").attr("id","newP").text(time.toLocaleString());
		$(".newCenter").append(newP);
		newCenter.attr("class","lt-center"); */
		let newBottom = $("<div></div>").attr("class", "newBottom");
		$(".newTie").append(newBottom);
		let newText = $("<p></p>").attr("id", "newText").text($(".sendTie-bottom").val());
		$(".newBottom").append(newText);
		let newTop = $("<div></div>").attr("class", "newTop");
		$(".newTie").append(newTop);
		let ltImgs = $("<div></div>").attr("class", "ltImgs");
		$(".newTop").append(ltImgs);
		for (let i = 0; i < $(".newImg").length; i++) {
			let img = $("<img>").attr("src", $(".newImg").attr("src"));
			$(".ltImgs").append(img);
		};
		let banKuaiBox = $("<div></div>").attr("class", "banKuaiBox");
		$(".newTie").append(banKuaiBox);
		let banKuai = $("<p></p>").attr("class", "banKuai").text("#YOUTUBE");
		$(".banKuaiBox").append(banKuai);
		let tieButton = $("<div></div>").attr("class", "tieButton1");
		$(".newTie").append(tieButton);
		let xueLiang = $("<div></div>").attr("class", "xueLiang1");
		$(".tieButton1").append(xueLiang);
		let xueLiangVal = $("<span></span>").attr("class", "xueLiangVal").text("血量 " + 100);
		$(".xueLiang1").append(xueLiangVal);
		let huiFuVal = $("<span></span>").attr("class", "huiFuVal").text("留言 " + 100);
		$(".xueLiang1").append(huiFuVal);
		let tieIcon = $("<div></div>").attr("class", "tieIconBox");
		$(".tieButton1").append(tieIcon);
		let zan = $("<img>").attr("class", "zan").attr("src", "img/jiaxue.png");
		$(".tieIconBox").append(zan);
		let no = $("<img>").attr("class", "no").attr("src", "img/jianxue.png");
		$(".tieIconBox").append(no);
		xueLiang.attr("class", "xueLiang")
		tieButton.attr("class", "tieButton")
		banKuaiBox.attr("class", "bkBox");
		tieIcon.attr("class", "iconBox");
		ltImgs.attr("class", "lt-imgs");
		newBottom.attr("class", "lt-bottom");
		// newCenter.attr("class","lt-center");
		newTop.attr("class", "lt-top");
		newBottom.attr("class", "lt-text");
		newTie.removeClass().attr("class", "tie");
		let flagzan = 0;
		let flagno = 0;
		let flagimg = 0;
		$(".zan").click(function(e) {
			if (flagzan == 0) {
				$(e.target).attr("src", "img/jiaxue2.png");
				flagzan = 1;
			} else {
				$(e.target).attr("src", "img/jiaxue.png");
				flagzan = 0;
			};

		});
		$(".no").click(function(e) {
			if (flagno == 0) {
				$(e.target).attr("src", "img/jianxue2.png");
				flagno = 1;
			} else {
				$(e.target).attr("src", "img/jianxue.png");
				flagno = 0;
			};

		});
		$(".lt-top").click(function(e) {
			if (flagimg == 0) {
				$(e.target).css({
					"width": "100%",
					"height": "100%",
				});
				flagimg = 1;
			} else {
				$(e.target).css({
					"width": "",
					"height": "80px",
				});
				flagimg = 0;
			}

		})
	});

})
