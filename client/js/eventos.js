"use strict";

class Eventos {

	constructor (enrutador) {

		this.enrutador = enrutador;
		this.inicializarEventos ();

	}

	inicializarEventos () {
		
		//definimos el router aqui por el ambito de las variables
		var enrutador = this.enrutador;
		
		/* 
			Cabecera / barra de navegacion 
		*/
		$("#navBtnInicio").click (function () {
			enrutador.navegar ("/");
		});
		$("#navBtnReservas").click (function () {
			enrutador.navegar ("/reserva");
		});
		$("#navBtnTarifas").click (function () {
			enrutador.navegar ("/tarifas");
		});
		$("#navBtnPF").click (function () {
			enrutador.navegar ("/pf");
		});
		$("#navBtnUbicacion").click (function () {
			enrutador.navegar ("/ubicacion");
		});
		$("#navBtnServicios").click (function () {
			enrutador.navegar ("/servicios");
		});
	}


}

