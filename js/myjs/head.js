define(["jquery"],function($){
	return{
		position : function(){
			$(".head").load("../html/head.html");
			$(".right").load("../html/right.html");
			$(".foot").load("../html/foot.html",function(){
				$(".footcontain").css("background-position-x",$(window).width()/2 - 1772/2);
				$(".containLeft").css("margin-left",$(window).width()/2 - 340);
				$(".footbottom").find("ul:first").css("margin-left",$(window).width()/2 - 300);
				//下边隐藏
				(function(){		  //right 悬停效果
					$(".right").children("li").mouseover(function(){
						$(this).css({"background":"#009D42"});
						switch($(this).index()){
							case 1:	$(this).css("line-height","27px").html("在线<br/>客服");break;
							case 2:	$(this).css("line-height","17px").html("客服电话 <br/>400 609 <br/>8888").css("width","80px");break;
							case 3:	$(this).css("line-height","27px").html("APP<br/>下载");break;
							case 4:	$(this).css("line-height","18px").html("返回<br/>顶部");break;
						}
						    
						$(this).mouseout(function(){
							$(this).css("background","#b3b3b3");
							switch($(this).index()){
								case 1:	$(this).html("<div class='icon1'></div>客服");break;
								case 2:	$(this).html("<div class='icon1'></div>客服").css({"width":"36px"});break;
								case 3:	$(this).html("<div class='icon1'></div>APP");break;
								case 4:	$(this).html("︿");break;   
							}
						})
					}) 
					$(".right").children("li:last").click(function(){
						document.documentElement.scrollTop = 0;
						document.body.scrollTop = 0;
					})
				})() 
			});
		}
	}
})