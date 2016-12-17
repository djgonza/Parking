"use strict";

class ControllerInicio extends SectionController {

	constructor (father) {
		
		super("inicio", father);

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
			this.initEvents(this);
		}

	}

	initEvents (controller) {

		// Evento btn
		this.element.find("button").click (function () {
			controller.validateForm ();
		});

		/*

			Crea el elemento calendario o time picker

		*/
		this.element.find("input").each(function () {

			switch (this.name) {
				case "date": 
					new DatePicker(this, 6, 5, 15);
				break;
				case "time": 
					new TimePicker(this, 0, 12);
				break;
			}

		});

	}

	validateForm () {

		console.log(this.element.find("input"));

	}

}