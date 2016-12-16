"use strict";

class SectionController {

	constructor (section, father) {
		
		this.father = father;
		this.section = section;
		this.element;
		this.status = false;

		this.loadHtml(this);

	}

	loadHtml (controller){

		// Pedimos el html
		$.ajax({

			url: "index.php",
			data: { 
				"getSection": controller.section
			},
			cache: false,
			type: "GET",
			success: function(response) {

				controller.element = $(response);
				$(controller.father).append(controller.element);
				controller.status = true;

			},
			error: function(xhr) {
				
				alert("Error al pedir seccion");

			}

		});

	}

	show () {
		this.element.show();
	}

	hide () {
		this.element.hide();
	}

}