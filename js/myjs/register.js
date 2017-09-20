
require(["../widge/config"],function(){
	require(["jquery","head"],function($,head){
		$(function(){
			head.position();
			var pass;
			var bol = true;
			$("input").keyup(function(){
				switch( $('input').index(this) ){
					case 1:var boo = !(/^[a-zA-Z][\w]{5,15}$/.test($(this).get(0).value));break;
					case 2:var boo = !(/^.{6,26}$/.test($(this).get(0).value));pass = $(this).get(0).value;break;
					case 3:var boo = !(pass == $(this).get(0).value);break;
					case 4:var boo = !(/.+@(qq|136)(\.com)+/.test($(this).get(0).value));break;
					case 5:var boo = !(/^1[0-9]{10}$/.test($(this).get(0).value));break;
				}
				if($(this).get(0).value == (undefined||' ')){
					$(this).siblings("span").css("visibility","visible");
				}else if(boo){
					$(this).siblings("span").css("visibility","visible");
				}else{
					$(this).siblings("span").css("visibility","hidden");
				}
			})
			
			
			$("button").click(function(){
				for(var i=0;i<$("input").length;i++){
					console.log($("input").eq(i).get(0).value == " " )
					console.log($("span").css("visibility") == 'visible')
					console.log( $("input").eq(3).get(0).value != $("input").eq(2).get(0).value)
					if( $("input").eq(3).get(0).value != $("input").eq(2).get(0).value || $("input").eq(i).get(0).value == " " || $("span").css("visibility") == 'visible' ){
						bol = false;
					}
				}
				if(bol){
					alert('提交')
				}else{
					alert('请完善表格')
				}
			})

			
			
		})
	})
})





