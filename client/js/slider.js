"use strict";

class Slider {

	constructor (element) {

		console.log("init");

		this.element = element;
		this.imgs = new Array();
		this.time = 0;
		this.interval;
		this.state = 0;

		this.loadParam();

	}

	loadParam () {

		var slider = this;

		$.each(this.element.children("param"), function (i, param) {

			switch (param.name) {

				case "img": 
					slider.imgs.push(param.value);
				break;

				case "time":
					slider.time = param.value;
				break;
			}

		});

	}

	init () {

		var slider = this;

		this.interval = setInterval (function () {

			slider.changeImgs();

		}, this.time);

	}

	changeImgs () {

		this.state++;
		if(this.state == this.imgs.length){
			this.state = 0;
		}

		console.log(this.element.children("img").src );
		

	}

	stop () {

		clearInterval(this.interval);

	}

}