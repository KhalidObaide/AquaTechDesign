
var cw = $('.mis-card').width();
$('.mis-card').css({'height':cw+'px'});
window.addEventListener('resize', ()=>{
	cw = $('.mis-card').width();
	$('.mis-card').css({'height':cw+'px'});
});

// Menu Toggle
var hum = document.querySelector('.hum-toggle');
var close = document.querySelector('.close-toggle');
var menu = document.querySelector('.header-menu');
var customerLoginBtn = document.querySelector('.header-button');
hum.addEventListener('click', e=>{
	menu.style.display = 'block';
	customerLoginBtn.style.display = 'block';
	close.style.display = "block";
});

close.addEventListener('click', e=>{
	customerLoginBtn.style.display = 'none';
	close.style.display = "none";
	menu.style.animation = "close 1s 1";
	menu.style.animationDuration = "1s";
	setTimeout(() => {  menu.style.display = "none";menu.style.animation = "drop 1s 1";}, 1000);

});


// Play The Video of reviews
var videoPlayerContainer = document.querySelector("#videoPlayerContainer");
var videoPlayerCross = document.querySelector("#videoPlayerCross");
var videoPlayer = document.querySelector('#videoPlayer');

function videoPlay(video){
	videoPlayerContainer.style.display = "block";
	$("#videoPlayer").first().attr('src',video)

}

videoPlayerCross.addEventListener('click', e=>{
	videoPlayerContainer.style.display = "none";
	$("#videoPlayer").first().attr('src',"")

});