"use strict";

class Validador {

	constructor () {

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


	validarDatosPersonales () {
		
	}

	validarVehiculo () {
		
	}

	validarPersonas () {
		
	}

	validarHorarios () {
		
	}

}