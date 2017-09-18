
require(["../widge/config"],function(){
	
	require(["jquery","head",'jqueryui'],function($,head){
		$(function(){
			var obj = new Obj;
			head.position();
			obj.banner()	//轮播图
			obj.nav()	
			obj.hide()	
			$(window).scroll(function(){
				obj.hide()   //left 显示隐藏菜单
				obj.nav()	//nav 不滚动
			})
			$(window).resize(function() {
				obj.hide()
			})
			
			
			obj.right();//right 悬停效果
			
		})
		 
		function Obj(){}
		
		Obj.prototype = {
			hide : function(){   //left 和 right 显示隐藏
				let scrolltop = document.documentElement.scrollTop || document.body.scrollTop
				if(scrolltop>=600 && scrolltop<=14200 && $(window).width()>1000){
					$(".left").css({"left":$(".pagecenter").offset().left-130 }).fadeIn(500)
					$(".right").css({"left":$(".pagecenter").offset().left +$(".pagecenter").width() + 30 }).fadeIn(500)
				}
				else{
					$(".left").hide()
					$(".right").hide()
				}
			},
			//下边隐藏
			right : function(){		  //right 悬停效果
				$(".right").children("li").mouseover(function(){
					$(this).css({"background":"#009D42"});
					switch($(this).index()){
						case 1:	$(this).css("line-height","27px").html("在线<br/>客服");break;
						case 2:	$(this).css("line-height","17px").html("客服电话 <br/>400 609 <br/>8888").css("width","80px");break;
						case 3:	$(this).css("line-height","17px").html("APP<br/>下载");break;
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
			},
			
			banner : function(){   //轮播图
				var Left = 0
				setInterval(function(){
					Left -= 900;
					
					//显示 切换键和小图
					$(".banner").mouseenter(function(){
						$(".cutleft").fadeIn(500);
						$(".cutright").fadeIn(500);
						$(".smalllist").animate({top: "364px"},1000)
					})
				
					$(".banner").mouseleave(function(){
						$(".cutleft").fadeOut(500);
						$(".cutright").fadeOut(500);
						$(".smalllist").animate({top: "442px"},1000)
					})
					  
					//切换图片
					$(".smalllist").children("li").click(function(){
						Left = $(this).index()*-900
					})
					
					//切换左右
					$(".cutleft").click(function(){
						Left += 900;
					})
					
					$(".cutright").click(function(){
						Left -= 900;
					})
					
					//滑动图片
					$(".banner").children(".img").animate({left:Left},800);
					if(Left == -6300){
						$(".banner").children(".img").css({'left':"0px"});
						Left = 0
					}
					/*console.log($(".banner").children(".img").css('left'));
					console.log("left"+Left);
					console.log(" ")*/
				},2000)
				
				
			},
		
			nav : function(){
				let scrolltop = document.documentElement.scrollTop || document.body.scrollTop
				if(scrolltop > 8038 && scrolltop < 13500){
					$("#nav").css({"position":"fixed","top":"-45px"});
					if(scrolltop < 9850){
						$("#nav").children("a").eq(0).css("border-bottom","2px solid #36A032").siblings().css("border","0");
					}else if(scrolltop < 11500){
						$("#nav").children("a").eq(1).css("border-bottom","2px solid #36A032").siblings().css("border","0");
					}else{
						$("#nav").children("a").eq(2).css("border-bottom","2px solid #36A032").siblings().css("border","0");
					}
					
				}else{
					$("#nav").css("position","");
				}
			},
		
			
		}
		
	})
})





