"use strict";

class ControllerInicio extends SectionController {

	constructor (father) {
		
		super("inicio", father);

		this.picker;
		this.slider;
		
		this.init(this);

	}

	init (controller) {

		if(!this.status) {
			setTimeout(function () {
				controller.init(controller);
			}, 500);
		}else{
			this.slider = new Slider(this.element.children("object"));
			this.picker = new Picker($("#picker"), this.element);
			this.initEvents(this);
		}

	}

	initEvents (controller) {

		// Evento btn
		this.element.find("button").click (function () {
			controller.validateForm ();
		});

	}

	validateForm () {

		Parking.UserInfo.Date.dayIni = this.picker.childrens[0].getDay();
		Parking.UserInfo.Date.dayEnd = this.picker.childrens[2].getDay();

		Parking.UserInfo.Date.timeIni = this.picker.childrens[1].getTime();
		Parking.UserInfo.Date.timeEnd = this.picker.childrens[3].getTime();

		Parking.UserInfo.Square.TypeV = $(this.element.find("select")[0]).find(":selected")[0].value;
		Parking.UserInfo.Square.Zone = $(this.element.find("select")[1]).find(":selected")[0].value;

		Parking.Router.navigate("reservas");

	}

}