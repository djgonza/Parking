"use strict";

class Eventos {

	constructor (router, mapa, reservas) {

		/*

			Variables

		*/
		this.router = router;
		this.mapa = mapa;
		this.reservas = reservas;

		/*

			Inicializadores

		*/
		this.initEventNav (this.router, this);
		this.initMapa (this.mapa, this);
		this.initReservas (this.reservas, this);

	}

	/*

		Eventos barra de navegacion

	*/
	initEventNav (router, eventos) {


		// Barra de navegacion superior
		$("#navBtnInicio").click (function () {
			router.navegar ("/inicio", "Inicio");
			eventos.switchPositionHeader(true);
		});
		$("#navBtnReservas").click (function () {
			router.navegar ("/reservas", "Reservas");
			eventos.switchPositionHeader(true);
		});
		$("#navBtnTarifas").click (function () {
			router.navegar ("/tarifas", "Tarifas");
			eventos.switchPositionHeader(true);
		});
		$("#navBtnUbicacion").click (function () {
			router.navegar ("/ubicacion", "Ubicacion");
			eventos.switchPositionHeader(false);
		});
		$("#navBtnServicios").click (function () {
			router.navegar ("/servicios", "Servicios");
			eventos.switchPositionHeader(true);
		});

		// Boton barra navegacion superior
		$("#btnHeadNav").click (function () {
			$("nav ul li").toggle();
		});

	}

	/*
		Inicia el controlador de reservas
	*/
	initReservas (reservas, eventos) {

		$("main").on('DOMNodeInserted', "#reservas", function () {
			//eliminamos el evento
			$("main").unbind('DOMNodeInserted');
			//ponemos el elemento
			reservas.setElement ($("#reservas")[0]);
			reservas.setSections ($("#reservas>div"));
			reservas.setStatusIcons ($("#reservas .seguimiento"));
			reservas.setButtons ($("#reservas #siguiente, #reservas #anterior"));
			//iniciamos los eventos
			eventos.initReservasEvents(reservas);
		});

	}

	/*
		
		Init Eventos Reservas

	*/
	initReservasEvents (reservas) {

		$("#reservas #anterior p").click (function () {
			reservas.setStatus(false);
		});
		$("#reservas #siguiente p").click (function () {
			reservas.setStatus(true);
		});

	}

	/*
		Inicia el evento del mapa de ubicacion
	*/
	initMapa (mapa, eventos) {

		$("main").on('DOMNodeInserted', "#ubicacion", function () {
			//eliminamos el evento
			$("main").unbind('DOMNodeInserted');
			//creamos el mapa
			mapa.initMap (document.getElementById("ubicacionMap"));
			//inicializamos el boton de navegacion del map
			eventos.initEventBtnNavigator(mapa);

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

	/*
	
		Switch header position

	*/
	switchPositionHeader (status) {

		if(status){
			$("header").css({
				"position": "relative"
			});
		}else{
			$("header").css({
				"position": "fixed"
			});
		}
		
	}




}

