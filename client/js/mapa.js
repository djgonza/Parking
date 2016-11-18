"use strict";

class Mapa {

	constructor (mapElement) {

		alert("mapa");

		// Variables
		this.locationDefault = {lat: 42.825498, lng: -1.631604};
		this.locationUser;
		// Mapa de google
		this.map = new google.maps.Map(mapElement, {
          center: this.locationDefault,
          scrollwheel: false,
          zoom: 4
        });

        /*this.markDefault = new google.maps.Marker({
          map: this.map,
          position: this.locationDefault,
          title: "Maria Ana Sanz"
        });*/

        /* 
			Pedir localizacion usuario
        */
		/*if(navigator.geolocation){
			navigator
			  	.geolocation
			  	.getCurrentPosition(
			  		function (location) {
			  			this.locationUser = location;
			  		}, 
			  		function (error){
			  			alert("Necesitamos tu localizacion.");
			  		});
		}else{
			alert("Tu dispositivo no dispone de geolocalizacion.");
		}*/

	}

	/* 

		

	*/

}