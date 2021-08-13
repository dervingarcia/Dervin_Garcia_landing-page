var images = [
	"carrusel-1.jpg",
	"carrusel-2.jpg",
	"carrusel-3.jpg"
];
var num = 0;

function next() {
	var carrusel = document.getElementById("slider");
	num++;
	if(num >= images.length) {
		num = 0;
	}
	carrusel.src = images[num];
}
function prev() {
	var carrusel = document.getElementById("slider");
	num--;
	if(num < 0) {
		num = images.length-1;
	}
	carrusel.src = images[num];
}
