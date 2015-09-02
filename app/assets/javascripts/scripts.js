function checkScroll(){
	if ($(window).scrollTop() === 0){
		clearNav();
	} else {
		whiteNav();
	}
}

function clearNav(){
	$(".nav").animate({
		backgroundColor: "rgba(0, 0, 0, 0)"
	}, 50);
}

function whiteNav(){
	$(".nav").animate({
		backgroundColor: "white"
	}, 100);
}