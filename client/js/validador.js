"use strict";

class Validador {

	constructor (element) {

		this.element = element;
		this.status = undefined;
		this.rules = {};

		this.regExp = {
			"mail": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			"tlf": /^\d{9}$/,
			"dni": /^\d{8}[a-zA-Z]$/,
			"matricula": /^\d{4}[a-zA-Z]{3}$/
		}

		this.setRules ();
		this.initValidationEvent ();

	}


	/*

		Asigna las reglas de validacion

	*/
	setRules () {

		var validador = this;

		$(this.element).children("param").each(function (i, element) {

			validador.rules[$(element).attr("name")] = $(element).attr("value");

		});

	}

	/*
	
		Inicia los eventos de validacion del elemento

	*/
	initValidationEvent () {

		var validador = this;

		$(this.element).children("input").on (
			"change paste keyup focusout focusin",
			function () {

				validador.validar ();

			}
		);


	}

	/*
		
		Actualiza el status de validacion del objeto

	*/
	setStatus (status) {

		var element = $(this.element).children("i");
		// Asigna el stado
		this.status = status;

		switch (status) {
			case undefined:
				element.html("");
			break;
			case true:
				element.html("done");
				element.addClass("verde");
				element.removeClass("rojo");
			break;
			case false:
				element.html("clear");
				element.addClass("rojo");
				element.removeClass("verde");
			break;
		}

	}

	/*

		Pone el foco en el elemento

	*/
	setFocus () {
		$(this.element).children("input").focus();
	}

	/*

		Valida el objeto

	*/
	validar () {

		var validador = this;
		var statusUpdate = false;

		// Sacamos el valor del input
		var text = $(this.element).children("input").val();

		$.each(this.rules, function(name, value) {
			
			switch (name) {
				case "required": 
					if (text == ""){
						validador.setStatus (false);
						statusUpdate = true;
					}
				break;
				case "minLength": 
					if (text.length < value){
						validador.setStatus (false);
						statusUpdate = true;
					}
				break;
				case "maxLength": 
					if (text.length > value){
						validador.setStatus (false);
						statusUpdate = true;
					}
				break;
				case "minNumber": 
					if (parseInt(text) < value){
						validador.setStatus (false);
						statusUpdate = true;
					}
				break;
				case "maxNumber": 
					if (parseInt(text) > value){
						validador.setStatus (false);
						statusUpdate = true;
					}
				break;
				case "regExp": 
					if (!validador.regExp[value].test(text)){
						validador.setStatus (false);
						statusUpdate = true;
					}
				break;
				default:
					validador.setStatus (true);
			}
		
		});

		if (!statusUpdate) {
			validador.setStatus (true);
		}

	}

}