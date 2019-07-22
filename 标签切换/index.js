//each:遍历
$(document).ready(function(){
	$("#tablefirst li").each(function(index){
		var liNode=$(this);
		$(liNode).mouseover(function(){
			timeOutid=setTimeout(function(){
			$("div.content").removeClass("content");
			$("#tablefirst li.tabin").removeClass("tabin");
			$("div").eq(index).addClass("content");
	        $(liNode).addClass("tabin");
			},300);
		}).mouseout(function(){
			clearTimeout(timeOutid);
		});
	});
});