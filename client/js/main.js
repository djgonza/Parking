$(function () {

	/* 
		Iniciamos las clases
	*/
	var router = new Router ();
	var mapa = new Mapa();
	var reservas = new Reservas();
	var eventos = new Eventos (router, mapa, reservas);

	//new DataPicker($("#datePicker"));

	$("#mapaSeleccionPlazas").draggable();


});