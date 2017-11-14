AOS.init();
$(window).on("scroll", function(){
	if ($("body").scrollTop() > ($("header").height() - 100) ){
		$(".contact, .wrapMenu").addClass("isBlack");
	}else{
		$(".contact, .wrapMenu").removeClass("isBlack");
	}
});
$(".menuToggle, .menu").on("click", function(){
	$(".menu, .menuToggle").toggleClass("isActive");
})
$(".contact").on("click", function(){
	$('body').animate({scrollTop: $("#contacto").offset().top}, 900);
})

$(".more").on("click", function(){
	$('body').animate({scrollTop: $("#tratamientos").offset().top}, 900);
})
$("#menuTratamientos").on("click", function(){
	$('body').animate({scrollTop: $("#tratamientos").offset().top}, 900);
})
$("#menuMaquillaje").on("click", function(){
	$('body').animate({scrollTop: $("#maquillaje").offset().top}, 900);
})
$("#menuProductos").on("click", function(){
	$('body').animate({scrollTop: $("#productos").offset().top}, 900);
})
$("#menuAcerca").on("click", function(){
	$('body').animate({scrollTop: $("#acerca").offset().top}, 900);
})
$("#menuContacto").on("click", function(){
	$('body').animate({scrollTop: $("#contacto").offset().top}, 900);
})
$(".send").on("click", function(){
	$(".pop").addClass("isActive");
})
$(".toggle").on("click", function(){
	$(".pop").removeClass("isActive");
})