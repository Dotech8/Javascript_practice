			var me = {

	Standard: "Middle_class",
	car: function () {
		// body...
		console.log(this.Standard);
	}
}
me.Standard= "First Middle_class";
me.car();