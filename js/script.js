$(function () {
	  $('.dataNas').mask('00/00/0000');
	 //A pagina tem a classe slider?
	 if ($(this).has('.slider').length) {
		 $('.slider').bxSlider({
			speed: 500,
			tickerHover:true,
			auto:true,
			pager:false,
			controls: true,
			nextText: 'Proximo',
			prevText:'Anterior',
			infiniteLoop: true,
			autoHover: true,
			pause: 4000,
			stopAutoOnClick: true,
			ticker: false
		});
	}
	
	$('#login').blur(function () {
		if ($(this).val().length==0) {
			$('#login').addClass('is-invalid');
		} else{
			$('#login').removeClass('is-invalid');
		}
		
	});

});
