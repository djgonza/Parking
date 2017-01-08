"use strict";

class Slider {

	constructor (element) {

		this.element = element;
		this.imgs = new Array();
		this.time = 0;
		this.intervalTime;
		this.fadeTime;
		this.state = 0;

		if($(window).width() > 1024) {
			this.loadParam(); 
			this.init();
		}

	}

	loadParam () {

		var slider = this;

		$.each(this.element.children("param"), function (i, param) {

			switch (param.name) {

				case "img": 
					slider.imgs.push(param.value);
				break;
				case "intervalTime":
					slider.intervalTime = param.value;
				break;
				case "fadeTime":
					slider.fadeTime = param.value;
				break;
			}

		});

	}

	init () {

		var slider = this;

		this.interval = setInterval (function () {

			slider.changeImgs();

		}, this.intervalTime);

	}

	changeImgs () {

		var slider = this;

		slider.state++;
		if(slider.state == slider.imgs.length){
			slider.state = 0;
		}
	
		var element = $(slider.element.children("img"));

		element.fadeOut(slider.fadeTime, function() {
			element.attr("src", slider.imgs[slider.state]);
		}).fadeIn(slider.fadeTime);

		
		

	}

	stop () {

		clearInterval(this.interval);

	}

}