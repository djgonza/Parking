"use strict";

class NavController {

	constructor (element) {
		
		this.element = $(element);
		this.init(this);

	}

	init (nav) {

		$.each(nav.element.children("ul").children("li"), function (i, element) {

			$(element).click(function () {
				Parking.Router.navigate($(element).text().toLowerCase());
				if(nav.element.children("i").is(":visible")){
					nav.element.children("ul").hide();
				}
			});

		});

		this.element.children("i").click (function () {
			nav.element.children("ul").toggle();
		});

	}

}