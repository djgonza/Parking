"use strict";

class ControllerInicio extends SectionController {

	constructor (father) {
		
		super("inicio", father);
		this.slider;
		//console.log(this.element);
		//this.slider = new Slider (this.element.children("object > img"));
		
		this.initSlider(this);

	}

	/*

		Inicia el slider

	*/
	initSlider (controller) {

		if(this.element) {
			this.slider = new Slider(this.element.children("object"));
		}else{
			setTimeout(function () {
				controller.initSlider(controller);
			}, 500);
		}

	}

}