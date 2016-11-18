"use strict";

class Eventos {

	constructor (router) {

		this.router = router;
		this.inicializarEventos ();

	}

	inicializarEventos () {
		
		//definimos el router aqui por el ambito de las variables
		var router = this.router;
		
		/* 
			Cabecera / barra de navegacion 
		*/
		$("#navBtnInicio").click (function () {
			router.navegar ("/inicio", "Inicio");
		});
		$("#navBtnReservas").click (function () {
			router.navegar ("/reservas", "Reservas");
		});
		$("#navBtnTarifas").click (function () {
			router.navegar ("/tarifas", "Tarifas");
		});
		$("#navBtnUbicacion").click (function () {
			router.navegar ("/ubicacion", "Ubicacion");
		});
		$("#navBtnServicios").click (function () {
			router.navegar ("/servicios", "Servicios");
		});
	}


}

