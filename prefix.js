window.onload = function(){
	$.ajax({
	  url: "header.html",
	  cache: false,
	  success: function(html){
		$("#navigation").append(html);
	  }
	});
	$.ajax({
	  url: "footer.html",
	  cache: false,
	  success: function(html){
		$("#footer").append(html);
	  }
	});
}