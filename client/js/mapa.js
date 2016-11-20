"use strict";

class Mapa {

	constructor (mapElement) {

		// Localizaciones
		this.locationsDefault = {
			mariana: {lat: 42.825498, lng: -1.631604}
		};

		// Variables
		this.locationUser;
		this.map = new google.maps.Map(mapElement, {
          center: this.locationsDefault.mariana,
          scrollwheel: true,
          zoom: 18
        });
        this.directionsService = new google.maps.DirectionsService;
  		this.directionsDisplay = new google.maps.DirectionsRenderer;
  		this.directionsDisplay.setMap(this.map);

		/*
			Marcas
		*/

		this.mapMarks = [];

		// Mariana Sanz
		this.setMarkOnMap (this.locationsDefault.mariana);


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
	makeRuteToDefault () {

		// Pide la localizacion al usuario
		if(!this.locationUser) {
			
			$("#ubicacion").append('<i id="mapLoadUser" class="material-icons">autorenew</i>');
			this.getUserPosition (this);

		}else{

			$("#mapLoadUser").remove();

			var mapa = this;

			this.directionsService.route({
				origin: this.locationUser,
				destination: this.locationsDefault.mariana,
				travelMode: google.maps.TravelMode.DRIVING
			}, function(response, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					mapa.directionsDisplay.setDirections(response);
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
			  			alert("Deves autorizar la localizacion");
			  			$("#mapLoadUser").remove(); // revisar!!!!!!!
			  		});
		}else{

			alert("Tu dispositivo no soporta la geolocalizacion");
			
		}

	}


}