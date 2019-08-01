/******************************************88
// Lecture: Hoisting
// Functions

//calculateAge(1965);
function calculateAge(year){
	console.log(2016-year);
}


// retirment(1990) - wouldnt work b/ function Expression

// Function Expression
var retirement = function(year){
	console.log(65-(2016 -year))
}


// Variables

//undefined
console.log(age);
var age = 23;
console.log(age);

function foo(){
	var age = 65;
	console.log(age);
}
foo();
console.log(age);
*/

/**********************************************
// Lecture: Scoping

//First scoping chain

var a = "hello!";
first();

function first(){
	var b = "HI!";
	second();

	function second(){
		var c = "hey";
		console.log(a + b + c);
	}
}

*/

/**********************************************
// Lecture: The this keyword

*/
//console.log(this);
function calculateAge(year){
	console.log(2016 - year);
	console.log(this);
}

var john = {
	name: "john",
	yearOfBirth: 1990,
	calculateAge: function(){
		console.log(this);

		//this in the function points to the window
		function innerFunction(){
			//console.log(this);
		}
		innerFunction();
	}
};

john.calculateAge();


var mike = {
	name: "Mike",
	yearOfBirth: 1984
};

mike.calculateAge = john.caclulateAge;
mike.calculateAge();



