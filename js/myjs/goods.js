
require(["../widge/config"],function(){
	require(["jquery","head","template","cookie"],function($,head,tem,cookie){
		$(function(){
			head.position();
			$(".right").show()
			$(".right").css({"left":$(".pagecenter").offset().left +$(".pagecenter").width() + 30 }).fadeIn(500)
			$.ajax({
				type: "GET",
				url: "../JSON/goods.json",
				success: function(data) {  
					same();
					main();
					inner();
					introduce()
					
					function same(){
						for(var i=0;i<data.InnerData.BuyWith.length;i++){
							str = "http://i2.lifevccdn.com" + ( data.InnerData.BuyWith[i].ImageUrl);
							$(".same").find(".img").eq(i).get(0).innerHTML = "<img src = " + str + ">";
							$(".same").find("li").eq(i).find("span").get(0).innerHTML = data.InnerData.BuyWith[i].SalePrice
							$(".same").find("li").eq(i).find("span").get(1).innerHTML = data.InnerData.BuyWith[i].PriceTag
							$(".same").find("li").eq(i).find("span").get(2).innerHTML = data.InnerData.BuyWith[i].Name
							$(".same").find("li").eq(i).find("span").get(4).innerHTML = data.InnerData.BuyWith[i].CommentCount
						}
					};
					
					function main(){
							// num
							
							num = function(){
								console.log('a')
							}
							
						$(".num").find("li").eq(0).click(function(){
							if( $(".num").find("li").eq(1).get(0).innerHTML == 1 ){
								return;
							}
							$(".num").find("li").eq(1).get(0).innerHTML -= 1
							
						})
						$(".num").find("li").eq(2).click(function(){
							$(".num").find("li").eq(1).get(0).innerHTML = parseInt($(".num").find("li").eq(1).get(0).innerHTML) +1
						})
						
						//左边小图
						for(var i=0;i<data.InnerData.Headers.length;i++){
							let str = "http://i2.lifevccdn.com" + (data.InnerData.Headers[i].ImageUrl);
							$(".smallImg").get(0).innerHTML += '<li><img src = ' + str + '></li>'
						}
				   
						//左边大图
						$(".bigImg").get(0).innerHTML = $(".smallImg").find("li").eq(0).get(0).innerHTML
						$(".smallImg").find("li").click(function(){
							let index = $(".smallImg").find("li").index(this);
							$(this).css({"border":"1px solid #00982b","width":"61px","height":"61px"}).siblings().css({"border":"0","width":"63px","height":"63px"})
							$(".bigImg").get(0).innerHTML = $(".smallImg").find("li").eq(index).get(0).innerHTML;
						})
						//商品名称
						for(var i=0;i<data.InnerData.GroupAttrs.props[0].vals.length;i++){
							$(".goods").append( "<li>"+ data.InnerData.GroupAttrs.props[0].vals[i].vname +"</li>");
						}
						let color = 16096;   
						let good = 10866;		
						change(color,good)  
						function change(color,good){
							$(".price").get(0).innerHTML = data.InnerData.GroupAttrs.skus[";285:"+ good +";5:16096;"].price;
						//	console.log( data.InnerData.GroupAttrs.skus[";285:"+ good +";5:"+ color +";"].price )
							$(".mainRight").find("p").html(data.InnerData.GroupAttrs.skus[";285:"+ good +";5:"+ color +";"].infoName);
							// 商品名称点击
							$(".goods").find("li").click(function(){
								console.log("goods")
								$(this).css({"border":"2px solid #00982c"}).siblings("li").css({"border":"1px solid #CCCCCC"})
								let index = $(this).index();
								good = data.InnerData.GroupAttrs.props[0].vals[index].vid;
								change(color,good)
							})  
							//  颜色
							$(".color").html ( "<li><img src = http://i2.lifevccdn.com" +data.InnerData.GroupAttrs.skus[';285:'+ good +';5:16096;'].infoImg  +"></li>" )
							$(".color").append ( "<li><img src = http://i2.lifevccdn.com" +data.InnerData.GroupAttrs.skus[';285:'+ good +';5:16097;'].infoImg  +"></li>")
							
							$(".color").find("li").click(function(){
								$(this).css("border","2px solid #00982c").siblings().css("border","1px solid #CCCCCC");
								let index = $(this).index();
								color = data.InnerData.GroupAttrs.props[1].vals[index].vid;
								console.log(color)
							})
							// 提交
							$('.Bottom').click(function(){
								
								$(".right").find(".icon2").html(1);

								img = "http://i2.lifevccdn.com" +data.InnerData.GroupAttrs.skus[';285:'+ good +';5:'+ color +';'].infoImg
								//color
								if(color == 16096){
									color = "曜石黑"
								}else{
									color = "象牙白"
								}
								name = $(".mainRight").find("p").html();
								price = $(".price").get(0).innerHTML;
								console.log(price,name)
						//      img , name, good , color , num ,price
								var arr = [img , name, good , color , num ,price]
								var arr = [good,color,$(".num").find("li").eq(1).get(0).innerHTML];
								cookie.setCookie("good",arr);
								console.log(arr)
							})
						}
					
					}
					
					function introduce(){
						for(let i = 0;i< data.InnerData.Specifications.length;i++){
							$(".introduce").find(".arguments").get(0).innerHTML += "<span>"+ data.InnerData.Specifications[i].Name + " : " + data.InnerData.Specifications[i].Value + "</span>"
						}
						
							for(let i = 0;i< data.InnerData.Notice.length;i++){
								$(".introduce").find(".word").get(0).innerHTML += data.InnerData.Notice[i] + "<br/>"
							}
		
							for(let i in data.InnerData.Details){
								str = "http://i2.lifevccdn.com" + (data.InnerData.Details[i].ImageUrl);
								$(".introduce").find(".img").get(0).innerHTML += '<img src = ' + str + '>'
								$(".introduce").find("img").width(700)
							}
					}
					
					// 评论

					$(".comment").find("span").eq(1).get(0).innerHTML = data.InnerData.MarketPrice


//					for(var i=0;i<data.InnerData.CommentList.length;i++){
//						var str = " <tr> 
//							<div style = "float:left,background:#333;width:80px">
//								<p> + "	data.InnerData.CommentList.CustomerCity " + </p>
//								<p> + "	 " + </p>
//							</div>
//							<div style = 'float:right,'></div>
//						</tr> "
						
					//promise
//					$(".promise").append("data.InnerData")
					
					
					function inner(){
						for(var i=0;i<data.InnerData.ServiceIcon.length;i++){
							str = "http://i2.lifevccdn.com" + (data.InnerData.ServiceIcon[i].ImageUrl);
							$(".inner").append("<img src = " + str + ">")
							
						}
					}
					
				},
			});
			
			
			
		})
	})
})





