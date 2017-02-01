"use strict";

class ValidateForm {

	constructor (inputs, msg) {

		this.msg = $(msg[0]);

		var validador = this;

		inputs.each(function (i, element) {

			switch (element.name) {
				case "firstName":
					validador.firstName = element;
				break;
				case "documentoVal":
					validador.documentoVal = element;
				break;
				case "email":
					validador.email = element;
				break;
				case "telefono":
					validador.telefono = element;
				break;
				case "longitud":
					validador.longitud = element;
				break;
				case "matricula":
					validador.matricula = element;
				break;
				case "numPersonas":
					validador.numPersonas = element;
				break;
				case "numNinos":
					validador.numNinos = element;
				break;
			}

		});

	}

	validate (){

		var status = true;
		
		if(!/^[a-zA-Z]+ [a-zA-Z]+$/.test(this.firstName.value)){
			status = false;
			this.setMsg ("Indique el nombre correctamente");
			this.showMsg();
			this.firstName.focus();
			return;
		}else{
			var name = this.firstName.value.split(" ");
			Parking.UserInfo.PersonalInfo.Name = name[0];
			Parking.UserInfo.PersonalInfo.FirstName = name[1];
			Parking.UserInfo.PersonalInfo.SecondName = name[2];
		}

		if(!/^[a-zA-Z0-9]+$/.test(this.documentoVal.value)){
			status = false;
			this.setMsg ("Indique un documento valido");
			this.showMsg();
			this.documentoVal.focus();
			return;
		}else{
			Parking.UserInfo.PersonalInfo.DNI = this.documentoVal.value;
		}

		if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/.test(this.email.value)){
			status = false;
			this.setMsg ("Indique un email valido");
			this.showMsg();
			this.email.focus();
			return;
		}else{
			Parking.UserInfo.PersonalInfo.Email = this.email.value;
		}

		if(!/^[0-9]{9,15}$/.test(this.telefono.value)){
			status = false;
			this.setMsg ("Indique un telefono valido");
			this.showMsg();
			this.telefono.focus();
			return;
		}else{
			Parking.UserInfo.PersonalInfo.Tlf = this.telefono.value;
		}

		//Longitud
		/*if(!/^[0-9]{0,5}$/.test(this.longitud.value)){
			status = false;
			this.setMsg ("Indique una Longitud valida");
			this.showMsg();
			this.longitud.focus();
			return;
		}*/

		//Matricula
		/*if(!/^[0-9a-zA-Z]{5,9}$/.test(this.matricula.value)){
			status = false;
			this.setMsg ("Indique una matricula valida");
			this.showMsg();
			this.matricula.focus();
			return;
		}*/
		if(this.matricula.value != ""){
			Parking.UserInfo.PersonalInfo.Matricula = this.matricula.value;
		}

		if(!/^[0-9]{1}$/.test(this.numPersonas.value)){
			status = false;
			this.setMsg ("En numero de personas esta compredido entre 0 y 9");
			this.showMsg();
			this.numPersonas.focus();
			return;
		}else{
			Parking.UserInfo.PersonalInfo.Adultos = this.numPersonas.value;
		}

		if(!/^[0-9]{1}$/.test(this.numNinos.value)){
			status = false;
			this.setMsg ("En numero de niños esta compredido entre 0 y 9");
			this.showMsg();
			this.numNinos.focus();
			return;
		}else{
			Parking.UserInfo.PersonalInfo.Niños = this.numNinos.value;
		}

		if(status){
			this.hideMsg();
		}

		return status;

	}

	setMsg (msg){
		this.msg.text(msg);
	}

	showMsg () {
		this.msg.show(); 
	}

	hideMsg () {
		this.msg.hide(); 
	}

}



