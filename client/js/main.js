$(function () {

	/* 
		iniciamos el enrutador
	*/
	var router = new Router ();
	var eventos = new Eventos (router);
	var mapa;

	// Inicializacion del map
	$("main").on('DOMNodeInserted', "#ubicacion", function () {
		//eliminamos el evento
		$("main").unbind('DOMNodeInserted');
		//creamos el mapa
		mapa = new Mapa(document.getElementById("ubicacion"));
	});


});