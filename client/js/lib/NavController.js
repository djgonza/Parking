"use strict";

class NavController {

	constructor (element, router) {
		
		this.element = $(element);
		this.router = router;
		this.init(this);

	}

	init (nav) {

		$.each(nav.element.children("ul").children("li"), function (i, element) {

			$(element).click(function () {
				nav.router.navigate($(element).text().toLowerCase());
			});

		});

		this.element.children("i").click (function () {
			nav.element.children("ul").toggle();
			nav.element.children("ul").children("li").toggle();
		});

	}

}