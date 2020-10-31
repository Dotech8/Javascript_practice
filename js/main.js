var items= [

	{
		name: "hammer",
		cost: 12,
		id: 1,
		picture: "ham.jpg"
	},

	{
		name: "cooker",
		cost: 10,
		id: 2,
		picture: "cook.jpg"
	},

	{
		name: "nails",
		cost: 1,
		id: 3,
		picture: "nails.jpg"
	},

	{
		name: "Car",
		cost: 1200,
		id: 4,
		picture: "Car.jpg"
	},

	{
		name: "house",
		cost: 20000,
		id: 5,
		picture: "house.jpg"
	},

];

function listItem(){
	for(var i = 0; i < items.length; i++){
		console.log(`The Item ${items[i].name} has a cost of ${items[i].cost}.`);
	}
}

listItem();