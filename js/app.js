$(document).ready(function(){
	addClassSubmenu();
	switchMenu();
	
	//toggling the menu on small screens
	$("#toggleMenu").click(function(e){
		e.preventDefault();
		$("#menu").slideToggle();
	});
}); // end of document ready 

var screenWidth = $(window).width(); 

function addClassSubmenu() {
// traversing through ALL menu links inside nav element
// checking if anchor's parent li has nested ul and adding to this anchor class submenu
	$("#menu li a").each(function(){
		if ($(this).parent('li').has('ul').length) {
		$(this).addClass("submenu");
	};
}); 
}//end of addClassSubmenu

$(window).on('resize', function() {
	screenWidth = $(window).width();
	switchMenu();
}); 


function switchMenu() {

if ( screenWidth < 771 ) {
	$("#toggleMenu").css("display", "inline-block");
	$("#menu").hide();
	$("#menu li").removeClass("hover");
	$("#menu li a.submenu").addClass("arrowright");
	$("#menu li").off('mouseenter mouseleave');	
	$("#menu li a.submenu").off('click').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass("arrowright arrowdown");
		$(this).parent("li").toggleClass("hover");
		
	}); // end of click
	
} else if ( screenWidth >= 771){
	$("#toggleMenu").css("display", "none");
	$("#menu").show();
	$("#menu li").removeClass("hover");
	$("#menu li a").off('click');
	$("#menu li").off('mouseenter mouseleave').on( 'mouseenter mouseleave',
	function() {
		$(this).toggleClass("hover");
	});// end of hover */
	
}; //end of  else if
} //end of switchMenu

