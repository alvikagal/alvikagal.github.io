const burger = document.querySelector(".burger");
var navigation = document.querySelector(".header_menu");

//отображать навигацию при изменении ширины экрана более 400рх
onresize = function() {
	if (document.documentElement.clientWidth > 500) {
		navigation.style.display = "block";
	} else {
		navigation.style.display = "none";
	}
}

//при нажатии на кнопку гамбургер показывать навигацию
function burgerOn(){
	if(navigation.style.display == "block"){
		navigation.style.display = "none";
	}else{
		navigation.style.display = "block";
	}
}

//при нажатии вне навигации - скрывать навигацию
$(document).mouseup(function (e) {
	var container = $(".burger");
	var menu = $(".header_menu");
	if (container.has(e.target).length === 0 && menu.has(e.target).length === 0 && navigation.style.display == "block"){
		navigation.style.display = "none";
	}
});
