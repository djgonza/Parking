$(function () {

	/* 
		Iniciamos las clases
	*/
	var router = new Router ();
	var mapa = new Mapa();
	var reservasController = new ReservasController();
	var eventos = new Eventos (router, mapa, reservasController);

	//new DataPicker($("#datePicker"));


});