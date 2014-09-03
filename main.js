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
		
		// return a new _ object if we're in the wrong scope
		if (window === this) {
			return new _(id);
		}

		// We're in the correct object scop:
		// Init our element object and return the object
		this.e = document.getElementById(id);
		return this;
	} else {
		return about;
	}
}

/* Junior functions
___________________*/

_.prototype = {

	junior_rainbow: function () {
			                  }

			
};
