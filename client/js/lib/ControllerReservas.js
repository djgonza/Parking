"use strict";

class ControllerReservas extends SectionController {

	constructor (father) {
		
		super("reservas", father);
		this.mapa;
		this.step = 0;
		this.validator;

		this.init(this);

	}

	init (controller) {

		if(!this.status) {

			setTimeout(function () {
				controller.init(controller);
			}, 500);

		}else{
			
			this.mapa = new MapSelectioSquares(this.element.find("canvas"));
			this.initEvents(this);
			this.validator = new ValidateForm(this.element.find("input"), this.element.find("span"));

		}

	}

	initEvents (controller) {

		//Revisar
		$("#btnSiguiente").click(function () {

			if(controller.validateStep(controller.step)){
				controller.step++;
				if(controller.step >= 3){
					controller.step--;
				}
				controller.setStep (controller.step);
			}
			
		});

		$("#btnAnterior").click(function () {
			controller.step--;
			if(controller.step < 0){
				controller.step = 0;
			}
			controller.setStep (controller.step);
		});

		$("#btnTransferencia").click(function () {
			Parking.UserInfo.PersonalInfo.TipoPago = "Transferecia";
			controller.pagar("transferecia");
			controller.setStep (controller.step+1);
		});

		$("#btnGiro").click(function () {
			Parking.UserInfo.PersonalInfo.TipoPago = "Giro";
			controller.pagar("giro");
			controller.setStep (controller.step+1);
		});

	}

	validateStep (step) {

		//console.log(step);

		switch (step) {
			
			case 0:

				if(this.mapa.value == undefined) {
					this.mapa.setMensaje ("Selecciona una plaza para continuar");
					this.mapa.showMensaje ();
					return false;
				} 

				this.mapa.hideMensaje ();
				return true;

			break;
			case 1:

				if(!this.validator.validate()){
					return false;
				}

				return true;

			break;
			case 2:

				//Pagos

			break;

		}

	}

	setStep (step) {

		this.element.children("article").hide();
		$(this.element.children("article")[step]).show();

	}

	pagar (tipo) {

		//Enviamos los datos del pago
		//console.log(Parking.UserInfo);
		var dataSend = Array();

		//Informacion personal
		dataSend[0] = Parking.UserInfo.PersonalInfo.DNI;
		dataSend[1] = Parking.UserInfo.PersonalInfo.Name;
		dataSend[2] = Parking.UserInfo.PersonalInfo.FirstName;
		dataSend[3] = Parking.UserInfo.PersonalInfo.SecondName;
		dataSend[4] = Parking.UserInfo.PersonalInfo.Tlf;
		dataSend[5] = Parking.UserInfo.PersonalInfo.Email;
		dataSend[6] = Parking.UserInfo.PersonalInfo.Adelantado;
		dataSend[7] = Parking.UserInfo.PersonalInfo.Comentario;
		dataSend[8] = Parking.UserInfo.PersonalInfo.Matricula;
		dataSend[11] = Parking.UserInfo.Square.Id;
		dataSend[12] = Parking.UserInfo.PersonalInfo.Adultos;
		dataSend[13] = Parking.UserInfo.PersonalInfo.Niños;
		dataSend[14] = Parking.UserInfo.PersonalInfo.TipoPago;

		//Informacion fechas
		dataSend[9] = 	Parking.UserInfo.Date.year+"-"+
						Parking.UserInfo.Date.month+"-"+
						Parking.UserInfo.Date.dayIni+" "+
						Parking.UserInfo.Date.timeIni+":00";
		
		dataSend[10] = 	Parking.UserInfo.Date.year+"-"+
						Parking.UserInfo.Date.month+"-"+
						Parking.UserInfo.Date.dayEnd+" "+
						Parking.UserInfo.Date.timeEnd+":00";

		//console.log(dataSend);

		$.ajax({

			url: "index.php?pagar",
			data: { 
				"pagar": true,
				"data": dataSend
			},
			cache: false,
			type: "post",
			success: function(response) {

				console.log(response);

			},
			error: function(xhr) {
				
				alert("Error al pedir seccion");

			}

		});

	}

	// Override from father
	show () {
		this.element.show();
		this.mapa.print();
	}

}