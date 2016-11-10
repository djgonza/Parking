"use strict";

class Enrutador {

	constructor () {
		
		//url en la que nos encontramos
		this.url = window.location.pathname;
		//definimos las secciones de la web
		this.secciones = {
			inicio: {
				element: $('#inicio'),
				visible: false
			},
			servicios : {
				element: $('#servicios'),
				visible: false
			},
			ubicacion: {
				element: $('#ubicacion'),
				visible: false
			},
			pf: {
				element: $('#pf'),
				visible: false
			},
			tarifas: {
				element: $('#tarifas'),
				visible: false
			},
			reserva: {
				element: $('#reserva'),
				visible: false
			},
			404: {
				element: $('#404'),
				visible: false
			}
		};
		//mostramos la seccion atual
		this.mostrarSeccion ();

	}

	/* 
		utilidades de la clase
	*/
	navegar (url, titulo) {
		//reemplazamos la url
		window.history.pushState(null, titulo, url);
		//actualizamos la variable de la clase
		this.url = url;
		//mostramos la nueva seccion
		this.mostrarSeccion();

	}

	/* 
		Decide que seccion mostrar en funcion de la url
		Si la ruta es / muestra inicio;
		Si la seccion no existe muestra 404
		Si la seccion existe la muestra
	*/
	mostrarSeccion () {
		
		//ocultamos todas las secciones
		this.ocultarTodasSecciones();

		//seccion por defecto
		if(this.url == "/"){ 
			this.secciones.inicio.element.show();
		//buscamos la seccion por nombre
		}else{
			var urlParseada = this.url.substring(1, this.url.length);
			//seccion no encontrada
			if(this.secciones[urlParseada] === undefined) {
				this.secciones[404].element.show();
				return;
			}
			//mostramos la seccion
			this.secciones[urlParseada].element.show();
		}

	}

	ocultarTodasSecciones () {
		//console.log(this.secciones);
		$.each (this.secciones, function (name, seccion) {
			seccion.element.hide();
		});
	}

	/*

	
	*/

}