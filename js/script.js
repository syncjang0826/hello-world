$(document).ready(function(e) {
    $('#mainmenu > li').mouseenter(function(e) {
        $(this).find('.submenu').stop( ).slideDown( );
    });
	$('#mainmenu > li').mouseleave(function(e) {
        $(this).find('.submenu').stop( ).slideUp( );
    });
	
	$('#trigger').click(function(e) {
		e.preventDefault( );
		$(this).toggleClass('active');
		$('#mainmenu').toggleClass('active');
	});
	
	$('.flexslider').flexslider({ animation: "slide" });
});













