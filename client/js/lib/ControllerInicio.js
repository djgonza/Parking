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

			var input = this;
			var fieldClass;

			switch (input.name) {
				case "date": 
					fieldClass = new DatePicker(input, 7, 5, 15);
				break;
				case "time": 
					fieldClass = new TimePicker(input, 0, 12);
				break;
			}

			// Oculta cuando click en la seccion
			controller.element.click(function (event) {
				if(event.target !== input){
					fieldClass.hide();
				}
			});

		});

	}

	validateForm () {

		console.log(this.element.find("input"));

	}

}