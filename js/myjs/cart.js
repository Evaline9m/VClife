
require(["../widge/config"],function(){
	require(["jquery","head","template","cookie"],function($,head,tem,cookie){
		$(function(){
			head.position();
			var arr = cookie.getCookie("good").split(",") 
			  
			//商品信息
			$("tr").eq(2).find("td").eq(1).get(0).innerHTML = "aaa"
			  
			  
			  
			 //  数量改变
			$(".num").find("li").eq(0).click(function(){
				if( $(".num").find("li").eq(1).get(0).innerHTML == 1 ){
					return;
				}
				$(".num").find("li").eq(1).get(0).innerHTML -= 1
				
			})
			$(".num").find("li").eq(2).click(function(){
				$(".num").find("li").eq(1).get(0).innerHTML = parseInt($(".num").find("li").eq(1).get(0).innerHTML) +1
			})
			
		})
	})
})





