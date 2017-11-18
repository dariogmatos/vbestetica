$(document).ready(() => {
	AOS.init();
	$(window).on("scroll", function() {
		if ($("html").scrollTop() > $("header").height() - 100) {
			$(".contact, .wrapMenu").addClass("isBlack");
		} else {
			$(".contact, .wrapMenu").removeClass("isBlack");
		}
	});
	$(".menuToggle, .menu").on("click", function() {
		$(".menu, .menuToggle").toggleClass("isActive");
	});
	$(".contact").on("mouseenter", () => {
		$(".contactIcon").removeClass("fa fa-envelope-o");
		$(".contactIcon").addClass("fa fa-envelope-open-o");
	});
	$(".contact").on("mouseleave", () => {
		$(".contactIcon").removeClass("fa fa-envelope-open-o");
		$(".contactIcon").addClass("fa fa-envelope-o");
	});
	$("#menuTratamientos, .more").on("click", function() {
		$("html").animate({ scrollTop: $("#tratamientos").offset().top }, 900);
	});
	$("#menuMaquillaje").on("click", function() {
		$("html").animate({ scrollTop: $("#maquillaje").offset().top }, 900);
	});
	$("#menuProductos").on("click", function() {
		$("html").animate({ scrollTop: $("#productos").offset().top }, 900);
	});
	$("#menuAcerca").on("click", function() {
		$("html").animate({ scrollTop: $("#acerca").offset().top }, 900);
	});
	$("#menuContacto, .contact").on("click", function() {
		$("html").animate({ scrollTop: $("#contacto").offset().top }, 900);
	});
	$(".send").on("click", function() {
		$(".pop").addClass("isActive");
	});
	$(".toggle").on("click", function() {
		$(".pop").removeClass("isActive");
	});
});
