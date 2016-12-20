"use strict";

class Router {

	constructor (element) {
		
		this.element = element;
		this.sections =  new Array();
		this.actuallySection;

		this.getSectionsValid (this);

	}

	/*

		Inicializa el router

	*/
	init () {

		switch(window.location.href.split("/")[3]){

			case "": 
				this.navigate("inicio");
			break;
			case "index.php":
				this.navigate("inicio");
			break;
			default:
				this.navigate(window.location.href.split("/")[3]);
			break;

		}

	}

	/*

		Descarga la lista de secciones disponibles

	*/
	getSectionsValid (router) {

		$.ajax({

			url: "index.php",
			data: { 
				"getListSections": true
			},
			cache: false,
			type: "GET",
			success: function(response) {

				response = JSON.parse(response);
				for (var i in response) {
					router.sections[response[i]] = undefined;
				}
				router.init();

			},
			error: function(xhr) {
				
				alert("Error al pedir seccion");

			}

		});

	}

	/*

		Inicializa una seccion

	*/
	initSection (section) {

		// Solo llegan peticiones de secciones validas
		switch (section){
			case "inicio":
				Parking.Sections[section] = new ControllerInicio(this.element);
			break;
			case "servicios":
				Parking.Sections[section] = new ControllerServicios(this.element);
			break;
			case "ubicacion":
				Parking.Sections[section] = new ControllerUbicacion(this.element);
			break;
			case "tarifas":
				Parking.Sections[section] = new ControllerTarifas(this.element);
			break;
			case "reservas":
				Parking.Sections[section] = new ControllerReservas(this.element);
			break;
			default:

			break;
		}
		
	}

	/*

		Mostrar seccion

	*/
	showSeccion (section) {
		if(this.issetSeccion (section)) Parking.Sections[section].show();
	}

	/*

		Ocultar seccion

	*/
	hideSeccion (section) {
		
		if(this.issetSeccion (section)) Parking.Sections[section].hide();
		
	}

	/* 

		Comprovar si una seccion existe

	*/
	issetSeccion (section) {

		return section in this.sections;

	}

	/*

		Navega a la seccion requerida

	*/
	navigate (section) {

		// Comprovamos que la seccion existe
		if(this.issetSeccion (section)){
			
			// Seccion inicializada
			if(Parking.Sections[section]){
				
				this.hideSeccion (this.actuallySection);
				this.showSeccion (section);
				this.actuallySection = section;
				this.setState (section, section);
				

			// Seccion no inicializada
			}else{

				this.hideSeccion (this.actuallySection);
				this.actuallySection = section;
				this.initSection(section);
				this.setState (section, section);
				
			}		

		// Redireccionamos al inicio
		}else{
			
			this.navigate("inicio");
			this.actuallySection = "inicio";

		}

	}

	/*

		Pone el state en la bara de direcciones

	*/
	setState (title, url) {

		window.history.pushState(null, title, url);

	}


}