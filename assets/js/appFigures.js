// FETCH THE DOWNLOAD NUMBER FROM THE APPFIGURES API
$.ajax({
	url: "/instavid-downloads",
	type: "GET",
	dataType: "json",
	success: function(t) {
	  var e = ''+t.downloads;
	  var f = e.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	  $("#counter").html("<h3>" + f + "</h3><p>downloads and counting..</p>");
	}
});