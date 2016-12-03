"use strict";

class Validador {

	constructor () {

		this.data = {
			nombre: ""

		}

		/* 
			Campos
		*/
		this.datosPersonales = {
			nombre: "",
			apellidoUno: "",
			apellidoDos: "",
			dni: {
				numero: 0,
				letra: ""
			},
			email: "",
			telefono: 0
		}

		this.vehiculo = {
			tipo: "",
			matricula: "",
			plaza: ""
		}

		this.personas = {
			total: 0,
			ninos: false,
			nNinos: 0
		}

		this.horarios = {
			fechaLlegada: {
				seg: 0,
				min: 0,
				hor: 0,
				dia: 0,
				mes: 0,
				año: 0
			},
			fechaSalida: {
				seg: 0,
				min: 0,
				hor: 0,
				dia: 0,
				mes: 0,
				año: 0
			}
		}

	}


	validar (element) {

		element = $(element);
		var valido = true;

		// Comprueba que el elemento tiene algo si es requerido
		if(element.attr("required") && element.val().length == 0){

			var mensaje = $("<validacion></validacion>").html("Campo requerido");
			console.log(mensaje[0]);
			element[0].after($("<validacion>Campo requerido</validacion>"));
			valido = false;

		// Comprovamos las restricciones
		}/*else if(element.attr("restrict")){

			element.after("<validacion>El campo es requerido</validacion>");
			valido = false;

		}*/

		// Eliminamos los mensajes
		if (valido) {
			$("validacion").remove();
		}

		return valido;

	}

}