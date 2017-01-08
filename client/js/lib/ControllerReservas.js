"use strict";

class ControllerReservas extends SectionController {

	constructor (father) {
		
		super("reservas", father);
		this.mapa;
		this.step = 0;

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

		}

	}

	initEvents (controller) {

		//Revisar
		$("#btnSiguiente").click(function () {

			if(controller.validateStep(controller.step)){
				controller.step++;
				controller.setStep (controller.step);
			}
			
		});

		$("#btnAnterior").click(function () {
			controller.step--;
			controller.setStep (controller.step);
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

			break;
			case 2:

			break;

		}

	}

	setStep (step) {

		this.element.children("article").hide();
		$(this.element.children("article")[step]).show();

	}

	// Override from father
	show () {
		this.element.show();
		this.mapa.print();
	}

}