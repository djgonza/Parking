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
			controller.pagar("transferecia");
		});

		$("#btnGiro").click(function () {
			controller.pagar("giro");
		});


	}

	validateStep (step) {

		console.log(step);

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

		// Pedimos el html
		$.ajax({

			url: "index.php",
			data: { 
				"pagar": true,
				
			},
			cache: false,
			type: "post",
			success: function(response) {

				controller.element = $(response);
				$(controller.father).append(controller.element);
				controller.status = true;

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