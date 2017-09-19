
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
		})
		 
		function Obj(){}
		
		Obj.prototype = {
			hide : function(){   //left 和 right 显示隐藏
				let scrolltop = document.documentElement.scrollTop || document.body.scrollTop
				if(scrolltop>=600 && scrolltop<=14200 && $(window).width()>1000){
					$(".left").css({"left":$(".pagecenter").offset().left-150 }).fadeIn(500)
					$(".right").css({"left":$(".pagecenter").offset().left +$(".pagecenter").width() + 30 }).fadeIn(500)
				}
				else{
					$(".left").hide()
					$(".right").hide()
				}
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





