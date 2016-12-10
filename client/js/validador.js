"use strict";

class Validador {

	constructor (element) {

		this.element 		= element;
		this.elementForm 	= undefined;
		this.status 		= undefined;
		this.rules 			= {};

		this.regExp = {
			"mail": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			"tlf": /^\d{9}$/,
			"dni": /^\d{8}[a-zA-Z]$/,
			"matricula": /^\d{4}[a-zA-Z]{3}$/
		}

		this.setElementForm();
		this.setRules ();
		this.initValidationEvent ();


	}

	/*

		Extrae el elemento del object

	*/
	setElementForm () {

		switch ($(this.element).attr("type")) {
			case "input":
				this.elementForm = $(this.element).children("input");
			break;
			case "select": 
				this.elementForm = $(this.element).children("select");
			break;
			case "check":
				this.elementForm = $(this.element).children("input");
			break;
			case "radio":
				this.elementForm = $(this.element).children("input");
			break;
		}

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

		this.elementForm.on (
			"change paste keyup focusout",
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

	getStatus () {
		return this.status;
	}

	/*

		Pone el foco en el elemento

	*/
	setFocus () {
		this.elementForm.focus();
	}

	/*

		Valida el objeto

	*/
	validar () {

		var validador = this;

		// Sacamos el valor del campo
		var text = this.elementForm.val();

		// Validamos por defecto
		validador.setStatus (true);

		$.each(this.rules, function(name, value) {
			
			// Rompemos si no ha introducido datos
			if(text == undefined) {
				validador.setStatus (undefined)
				return false;
			}

			switch (name) {
				case "required": 
					if (text == ""){
						validador.setStatus (false);
					}
				break;
				case "minLength": 
					if (text.length < value){
						validador.setStatus (false);
					}
				break;
				case "maxLength": 
					if (text.length > value){
						validador.setStatus (false);
					}
				break;
				case "minNumber": 
					if (parseInt(text) < value){
						validador.setStatus (false);
					}
				break;
				case "maxNumber": 
					if (parseInt(text) > value){
						validador.setStatus (false);
					}
				break;
				case "regExp": 
					if (!validador.regExp[value].test(text)){
						validador.setStatus (false);
					}
				break;
				default:
					validador.setStatus (true);
			}
		
		});

	}

}