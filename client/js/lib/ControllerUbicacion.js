"use strict";

class ControllerUbicacion extends SectionController {

	constructor (father) {
		
		super("ubicacion", father);

		this.locationsDefault = {
			mariana: {lat: 42.825498, lng: -1.631604}
		};

		this.locationUser;
		this.map;
		this.mapElement;
        this.directionsService;
  		this.directionsDisplay;
		this.mapMarks = [];

		this.init(this);

	}

	init (controller) {


		if(!this.element) {
			setTimeout(function () {
				controller.init(controller);
			}, 500);
		}else{
			
			this.map = this.element.children("div")[0];
			this.map = new google.maps.Map(this.map, {
	          center: this.locationsDefault.mariana,
	          scrollwheel: true,
	          zoom: 18
	        });
	        this.initMarks ();
	        this.initRoutes();
	        this.initEvents (this);

	    }

	}

	/*
		
		Inicializa las marcas

	*/
	initMarks () {
		// Mariana Sanz
		this.setMarkOnMap (this.locationsDefault.mariana);
		// Plaza de toros
		//...
	}

	/*
		Inicializa las rutas
	*/
	initRoutes () {
		this.directionsService = new google.maps.DirectionsService;
  		this.directionsDisplay = new google.maps.DirectionsRenderer;
  		this.directionsDisplay.setMap(this.map);
	}

	/*
		Inicializa los eventos
	*/
	initEvents (controller) {

		this.element.children("i").click (function () {
			controller.makeRuteToDefault(controller);
		});

	}

	/* 
		Muestra marca en el mapa
	*/
	setMarkOnMap (location) {

		// Creamos la marca
		var marca = new google.maps.Marker({
          map: this.map,
          position: location,
          title: "Maria Ana Sanz"
        });

		// Añadimos la marca al array
        this.mapMarks.push(marca);

	}

	/*

		Crea la ruta desde el usuario asta el default

	*/
	makeRuteToDefault (controller) {

		// Pide la localizacion al usuario
		if(!this.locationUser) {
			
			$("#ubicacion").append('<i id="mapLoadUser" class="material-icons">autorenew</i>');
			this.getUserPosition (this);

		}else{

			$("#mapLoadUser").remove();

			this.directionsService.route({
				origin: this.locationUser,
				destination: this.locationsDefault.mariana,
				travelMode: google.maps.TravelMode.DRIVING
			}, function(response, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					controller.directionsDisplay.setDirections(response);
				} else {
					window.alert('Directions request failed due to ' + status);
				}
			});

		}
		
	}

	/* 

		Pide la localizacion al usuario

	*/
	getUserPosition (mapa){

		if(navigator.geolocation){
			navigator
			  	.geolocation
			  	.getCurrentPosition(
			  		function (location) {
			  			// Guardamos la localizacion del user
			  			mapa.locationUser = {
			  				lat: location.coords.latitude,
			  				lng: location.coords.longitude
			  			};
			  			// Creamos la ruta
			  			mapa.makeRuteToDefault();
			  		}, 
			  		function (error){
			  			alert("Debes autorizar la localizacion");
			  			$("#mapLoadUser").remove(); // revisar!!!!!!!
			  		});
		}else{

			alert("Tu dispositivo no soporta la geolocalizacion");
			
		}

	}

}