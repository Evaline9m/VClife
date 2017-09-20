define(["jquery"],function($){
	return{
		template : function(id, data){
			var str = document.getElementById(id).innerText;  
		    str = "log(`"+str+"`)";//将整个模板使用log函数包围  
		    str = str.replace(/<%=(.+)%>/g, "`); log($1); log(`");//处理<%= %>情况  
		    str = str.replace(/<%(.+)%>/g, "`); $1 log(`");//处理<% %>情况  
		    console.log("处理后的str\n",str);  
		    //使用``为了获取处理后的str  
		    var funcstr = `     
		        (function(data){  
		            var htmlstr = "";  
		            function log(str) {  
		                htmlstr += str;  
		            }  
		            ${str};  
		            return htmlstr;  
		        })  
		    `;  
		    console.log("拼接成可被eval解析的代码，其类型是"+typeof funcstr,funcstr);  
		    var realfunc = eval(funcstr); //使用eval解析可执行的代码  
		    console.log("eval解析字符串后生成的可执行代码,即函数",realfunc);  
		    var res = realfunc(data);  
		    console.log("执行函数返回的html字符串",res);  
		    return res;  
		}  
		  
		//通过调用template方法，向指定模板中填充数据，并返回html文本内容  
//		var htmltext = template("mytemp", [{url: "xxxx", username:"yt"}, {url:"zzzzz", username: "mt"}]);  
//		  
//		document.body.innerHTML = htmltext;  
		
	}
})

