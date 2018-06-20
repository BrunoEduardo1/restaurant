$(function () {
	 //mascara para o numero da matricula
	 console.log('Js');
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


});
