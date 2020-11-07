const burger = document.querySelector(".burger");
var button = document.querySelector(".header_menu");
// console.dir(menu);
function burgerOn(){
	// burger.classList.toggle("burger_active");
	if(button.style.display == "block"){
		button.style.display = "none";
	}else{
		button.style.display = "block";
	}
}

$(document).mouseup(function (e) {
    var container = $(".burger");
    var menu = $(".header_menu");
    if (container.has(e.target).length === 0 && menu.has(e.target).length === 0 && button.style.display == "block"){
        button.style.display = "none";
    }
});
