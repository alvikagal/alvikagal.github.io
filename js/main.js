const burger = document.querySelector(".burger");
var navigation = document.querySelector(".header_menu");
//массив картинок
var images = [ 
"29.jpg",
"13.jpg",
"151.jpg",
"11.jpg",
"148.jpg",
"711.jpg",
"15.jpg"
];
//путь к картинке 
var path = "img/slider/";
var currentImg = 0;

//создаем слайдер картинок и первый слайд обводим
for (var i = 0; i < images.length; i++) {
	//для каждого li добавляем data-set номер
	$('#slides ul').append("<li data-id='" + i + "'><img src='" + path + images[i] + "'></li>");
	if (i == 0) {
		$("#slides ul li").addClass('active');
	}
}

//ширина для картинок внизу по кол-ву их в массиве
var width = (100/images.length)-2;
$("#slides ul li").css({ "width": width + "%"});


//клик по картинкам
$("#slides ul li").click(function(e){
	//удаляем class active
	$("#slides ul li").removeClass('active');
	//добавляем class active для ажатой картинки
	$(this).addClass('active');
	var id = e.currentTarget.dataset.id;
	//меняем картинку в слайде
	$("#main-slider img").attr("src", path + images[id]);
	currentImg = id;
});

$("#main-slider img").click(function() {
	console.log(this);
	if ($("#opacity").css({'display':'none'})) {
		$("#opacity").css({'display':'block'});
		$("#full-image").css({'display':'block'}).append("<img src='" + $(this).attr('src') + "'>");
	}
});

$("#full-image").click(function() {
	$("#opacity").css({'display':'none'});
	$("#full-image").css({'display':'none'}).empty();
});

$("#opacity").click(function() {
	$("#opacity").css({'display':'none'});
	$("#full-image").css({'display':'none'}).empty();
});



//ожидаем готовности документа
$(document).ready(function() {
	//при клике вправо менять картинку
	$("#main-slider .next").click(function() {
		currentImg++;
		if (currentImg >= images.length) {
			currentImg = 0;
		}
		$("#main-slider img").attr("src", path + images[currentImg]);
		//убираем выделение слайда
		$("#slides ul li").removeClass('active');
		//выделяем слайд
		var $item = $('#slides ul li[data-id="'+ currentImg +'"]').addClass('active');
	});

	//при клике влево менять картинку
	$("#main-slider .pref").click(function() {
		currentImg--;
		if (currentImg < 0) {
			currentImg = images.length - 1;
		}
		$("#main-slider img").attr("src", path + images[currentImg]);
		//убираем выделение слайда
		$("#slides ul li").removeClass('active');
		//выделяем слайд
		var $item = $('#slides ul li[data-id="'+ currentImg +'"]').addClass('active');
	});

	// console.log(images.length);
	$("#main-slider img").attr("src", path + images[currentImg]);

});


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
