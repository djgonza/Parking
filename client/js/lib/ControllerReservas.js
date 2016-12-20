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
			controller.setStep (controller.step++ + 1);
		});

		$("#btnAnterior").click(function () {
			controller.setStep (controller.step-- - 1);
		});

	}

	setStep (step) {

		this.element.children("article").hide();
		$(this.element.children("article")[step]).show();

	}

}