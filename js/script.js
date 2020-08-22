// карусель

$(document).ready(function(){

	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: '.swiper-button-next',
		},
		breakpoints: {
			0: {
				direction: 'vertical',
				spaceBetween: 0,
				slidesPerView: 2,
				slidesPerGroup: 1,
			},
			576: {
				direction: 'horizontal',
				slidesPerView: 2
			},
			767: {
				slidesPerView: 2,
				spaceBetween: 0
			},
			992: {
				slidesPerView: 3
			}
		}
	});
});

// смена состояния кнопки клик-прелодер-выбор

$('#btn_static').click(function () {
	$('#btn_static').hide(); 
	$('#btn_load').removeAttr('hidden');
	setTimeout(function() {
		$('#btn_load').hide();
		$('#btn_choice').removeAttr('hidden')
	}, 1500);
});

// сворачивание расписания дня в строку

	$("#header_button").click(function () {
		if ($(window).width()<577) {
		$(this).siblings(".wrapper").slideToggle("slow")
		}
	});




