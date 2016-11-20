"use strict";

class Eventos {

	constructor (router) {

		this.router = router;
		this.initEventNav (this.router);

	}

	/*

		Eventos barra de navegacion

	*/
	initEventNav (router) {

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

		$("#btnHeadNav").click (function () {
			$("nav ul li").toggle();
		});

	}

	/*

		Inicia el evento para navegar del mapa

	*/
	initEventBtnNavigator (map) {

		$("#ubicacionBtnNavegar").click (function () {
			map.makeRuteToDefault();
		});

	}


}

