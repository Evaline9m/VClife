define(["jquery"],function($){
	return{
		position : function(){
			$(".head").load("../html/head.html");
			$(".right").load("../html/right.html");
			$(".foot").load("../html/foot.html",function(){
				$(".footcontain").css("background-position-x",$(window).width()/2 - 1772/2);
				$(".containLeft").css("margin-left",$(window).width()/2 - 340);
				$(".footbottom").find("ul:first").css("margin-left",$(window).width()/2 - 300);
			});
		}
	}
})