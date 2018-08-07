 $( function() {
    $( "#tabs" ).tabs();

    var themesItems = $(".themes-item");

    themesItems.on("click", function() {
    	$(this).addClass("active").siblings().removeClass("active");
    })
 });