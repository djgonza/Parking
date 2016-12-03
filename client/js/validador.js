"use strict";

class Validador {

	constructor () {

		this.data = new Array();

	}

	/*	

		Añade las diferentes secciones al validador

	*/
	setSection (i, element) {

		var validador = this;
		element = $(element);

		var data = {};

		element.children().each(function (i, element) {

			var element = $(element);
			var type = element.prop('nodeName');

			if (type == "INPUT" || type == "SELECT"){

				var dataObj = data[$(element).attr("name")] = {
					"element": element,
					"status": false
				};
				// Comprovamos el requerimiento del campo
				if(!element.attr("required")){
					data[$(element).attr("name")].status = true;
				}
				validador.initValidationEvent(element, dataObj);
				
			}
			
		});

		this.data[i] = data;

	}

	/*
		
		Devuelve el stado de validacion de la seccion

	*/
	getSectionStatus (section) {

		var status = true;

		$.each(this.data[section], function (i, element) {

			if (!element.status) {
				status = false;
				element.element.focus();
				return false;
			}

		});

		return status;
		
	}


	/*
	
		Inicia los eventos de validacion del elemento

	*/
	initValidationEvent (element, dataObj) {

		var validador = this;

		element.on(
			"change paste keyup focusout focusin", 
			function () {

				// asignamos el status
				if (!validador.validar (dataObj.element)) {
					// Mostramos el mensaje
					$(dataObj.element.next("validacion")[0]).show();
					dataObj.status = false;
				}else{
					// Ocultamos el mensaje
					$(dataObj.element.next("validacion")[0]).hide();
					dataObj.status = true;
				}
				

			}
			
		);

		element.on("focusout", function () {
			$(dataObj.element.next("validacion")[0]).hide();
		});

	}

	/*
		
		Valida un elemento en funcion de sus reglas

	*/
	validar (element) {

		element = $(element);

		switch (element.prop('nodeName')) {

			case "INPUT": 
				
				// El elemento es requerido
				if (element.attr("required")) {

					// Longitud minima
					if (element.attr("min") && element.val().length < element.attr("min")){
						return false;
					}
					// Longitu maxima
					if (element.attr("max") && element.val().length > element.attr("max")){
						return false;
					}

				}

				return true;

			break;
			case "SELECT": 
				
				return true;

			break;

		}

	}

}