"use strict";

class Router {

	constructor () {
		
		this.secciones = new Array(); // Inicializa el array secciones

		// Si no hay ninguna seccion actualmente redirigimos a inicio
		var seccionActual = this.getActuallySeccion();
		if (seccionActual == "" || seccionActual == "index.php"){
			this.navegar("/inicio", "Inicio");
			
		// Si no navegamos a la seccion
		}else{
			this.navegar(seccionActual, seccionActual.charAt(0).toUpperCase()+seccionActual.slice(1));
		}
		

	}

	/* 
		Comprovar si una seccion existe
	*/
	issetSeccion (seccion) {

		return seccion in this.secciones;

	}

	/*
		Comprueba el estado de una seccion
	*/
	statusSeccion (seccion) {



	}

	/*
		Mostrar seccion
	*/
	showSeccion (seccion) {
		this.secciones[seccion].show();
	}
	/*
		Ocultar seccion
	*/
	hideSeccion (seccion) {
		this.secciones[seccion].hide();
	}
	/*
		Devulve la seccion actual
	*/
	getActuallySeccion () {
		return window.location.href.split("/")[3];
	}

	/*

		Muestra la seccion requerida
		Si no existe la descarga
			url: String -> /url
			titulo: String

	*/
	navegar (url, titulo) {

		// Seccion actual
		var seccionActual = this.getActuallySeccion();
		var seccionPedidaUrl = url.replace("/","");

		// Oculta la seccion actual
		if (this.secciones[seccionActual]) {
			this.hideSeccion(seccionActual);
		}

		// Comprueba si existe la seccion requerida
		if (this.secciones[seccionPedidaUrl]) {
			// Muestra la seccion
			this.showSeccion(seccionPedidaUrl);

		// Si no existe
		}else{
			// Descarga la seccion
			this.getSeccion(seccionPedidaUrl);

		}

		// Actualizamos el state del navegador
		window.history.pushState(null, titulo, url);

	}

	/*

		Pedir seccion al server

	*/
	getSeccion (seccion) {

		// Ambito de las variables
		var arraySecciones = this.secciones;

		// Realiza la peticion ajax
		$.ajax({

			url: "index.php",
			data: { 
				"seccion": seccion
			},
			cache: false,
			type: "GET",
			success: function(response) {

				// Crea el elemento
				arraySecciones[seccion] = $(response);
				// Añadimos la seccion al body
				$("main").append(arraySecciones[seccion]);

			},
			error: function(xhr) {
				
				alert("Error al pedir seccion");

			}

		});

	}

}