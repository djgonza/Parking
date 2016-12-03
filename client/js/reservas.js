"use strict";

class Reservas {

	constructor () {

		// Contenedor
		this.element;
		// Pasos del formulario
		this.sections;
		// Iconos superiores nav
		this.statusIcons;
		// Botones alante atras
		this.buttons;
		// Punto del formulario
		this.status = 0;
		// Validador
		this.validador = new Validador();

	}

	setElement (element) {
		this.element = element;
	}

	setSections (elements) {
		this.sections = elements;
	}

	setStatusIcons (elements) {
		this.statusIcons = elements;
	}

	setButtons (elements) {
		
		this.buttons = {};
		this.buttons.anterior = elements[0];
		this.buttons.siguiente = elements[1];

	}

	setStatus (status) { //true ++, false --

		if(this.validar()){

			if (status) {
				this.status++;
			}else{
				this.status--;
			}

			this.switchIconsNav ();
			this.switchBottons ();
			this.switchSections ();

		}

	}


	/*
		
		Valida el form

	*/
	validar () {

		var reservas = this;

		$(this.sections[this.status]).children("input").each(function (i, element) {

			reservas.validador.validar(element);

		});

		return false;

	}

	/*
		
		Muestra y oculta las secciones del form

	*/
	switchSections () {

		$(this.sections[this.status - 1]).hide();
		$(this.sections[this.status]).show();
		$(this.sections[this.status + 1]).hide();

	}

	/*
		
		Muestra u oculta los botones alante atras

	*/
	switchBottons () {

		switch (this.status) {

			case 0:

				$(this.buttons.anterior).hide();

			break;
			case 1:

				$(this.buttons.anterior).show();

			break;
			case this.sections.length - 2:

				$(this.buttons.siguiente).show();

			break;
			case this.sections.length - 1:

				$(this.buttons.siguiente).hide();

			break;

		}

	}


	/*
	
		Cambia de color los iconos del nav superior

	*/
	switchIconsNav () {

		switch (this.status) {

			case 0:
				
				this.setIconActive(this.statusIcons[this.status]);
				this.setIconDefault(this.statusIcons[this.status+1]);

			break;
			case this.sections.length - 1:

				this.setIconActive(this.statusIcons[this.status]);
				this.setIconSucess(this.statusIcons[this.status-1]);

			break;
			default:

				this.setIconSucess(this.statusIcons[this.status-1]);
				this.setIconActive(this.statusIcons[this.status]);
				this.setIconDefault(this.statusIcons[this.status+1]);

		}

	}

	setIconActive (element) {

		$(element).children("div")
			.removeClass("FormDefault")
			.removeClass("FormSuccess")
			.addClass("FormActive");

	}

	setIconDefault (element) {

		$(element).children("div")
			.removeClass("FormActive")
			.removeClass("FormSuccess")
			.addClass("FormDefault");

	}

	setIconSucess (element) {

		$(element).children("div")
			.removeClass("FormDefault")
			.removeClass("FormActive")
			.addClass("FormSuccess");

	}

}