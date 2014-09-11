/* Released as "All Rights Reserved"
   until further notice/application of a formal license */


/* Boilerplate code
____________________*/

function _(id) {

	// In case no id is set, return about text. 
	var about = {
		Version: 0.1,
		Author: "Mark 'Happy-Ferret' Bauermeister",
		Created: "September 2014",
		Updated: "September 3, 2014"
	};

	if (id) {
		
		// If in wrong scope, return a new _ object.
		if (window === this) {
			return new _(id);
		}

		// Initialize element object and return the object
		this.e = document.getElementsByClassName(id);
		return this;
	} else {
		return about;
	}
}

/* Junior functions
___________________*/

_.prototype = {

	junior_rainbow: function (){


				                	},

	junior_rainbowBG: function () {
					for(var i = 0; i < this.e.length; i++) {
					this.e[i].style.background = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
					}
					return this;
							},

	junior_hexBG: function (colour) {
					for(var i = 0; i < this.e.length; i++) {
					this.e[i].style.background = colour;
					}
					return this;
							},
	junior_txt: function (colour) {
					for(var i = 0; i < this.e.length; i++) {
                                        this.e[i].style.color = colour;
					}
                                        return this;
                                                        }

};