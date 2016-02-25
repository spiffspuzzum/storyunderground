/* MENU */
/* refactor to grab children of menu*/
var $menuBar = $("#menu");
var $menuTitle = $("#menu h1");
var $menuImage = $("#logo");
var headerHeight = $("header").height();
var menuStick = "js-menu-stick";

$(window).scroll(function() { 
	if( $(this).scrollTop() > headerHeight) {
		$menuBar.addClass(menuStick);
		$menuTitle.css("display", "inline");
		$menuImage.css("display", "inline");
	} else {
		$menuBar.removeClass(menuStick);
		$menuTitle.css("display", "none");
		$menuImage.css("display", "none");
	}
});

/* BUTTON */
$(".btn-download").on("click", function(){
	$(".btn-text").toggleClass("btn-status-bar");
});

/*  VIDEO */
$(".video").magnificPopup({
  type: 'iframe', 
  disableOn: 500, 
  iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>'
  }, 
});