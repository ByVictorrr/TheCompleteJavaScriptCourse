/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge)

//Undefined
var job; console.log(job); job = "Teacher"; console.log(job); */ /*====== Variabale mutations and type coercion=========*/
/*
var firstName = "John";
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' ear old ' + job + '. Is he married ? ' + isMarried);

//variable mutation
age = "twenty eight";
job = "driver";

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married ? ' + isMarried);
*/

/*========Basic opertators==========================

// Math operators
var now, yearMark, yearJohn, ageMark, ageJohn;
now = 2020;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);

// Logical operators 
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// Typeof operators
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "mark is older than john");
var x;
console.log(typeof x);

//=================Operator procedence==================================\\
//Basic procedence
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
// multiple assignments
var x, y;
x = y = ( 3 + 5 ) * 4 - 6; 
console.log(x,y);

*==================================================================/

/****************************************************
 *
 * if / else statments
 *
	var firstName = "John";
	var civilStatus = "single";
	
	if(civilStatus === "married"){
		console.log(firstName + " is married!");
	}else{
		console.log(firstName + " will hopefully marry soon :)");
	}
*/


/*******************************************
 * Boolean logic
 *
	var firstName = "John";
	var age = 16;
	if (age < 13){
		console.log(firstName + " is a boy.");
	} else if (age >= 13 && age < 20 ){
		console.log(firstName + " is a teen");
	}else{
		console.log(firstName + " is a man");
	}
*/

/**************************************
 * Ternanry operator and switch statments
 *
//Ternanry
	var firstName = "John";
	var age = 22;
	age >= 18 ? console.log(firstName + "drinks beer.") : console.log(firstName + "drinks juice."):
	var drink = age >=18 ? "beer" : "juice";
//Switch
var job = "teacher"
switch(job){
	case "teacher":
		console.log(firstName + " teaches kids how to code.");
		break;
	case "driver":
		console.log(firstName + " drives an uber in libson");
		break;
	case "designer":
		console.log(firstName + " designes beautiful websites");
		break;
	default:
		console.log(firstName + " does something else.");
}


/**************************************
 * Truthy and Falsy values and equality operators

// falsy values: undefined, null, 0 , '', NaN
// truthy values: NOT falsy values

	var height = 23;

	if(height || height === 0){
		console.log("variable is defined");
	}else{	
		console.log("variable is not defined");
	}

//  Equality Operators
	if(height == "23"){
		console.log("the == operator does type coercion!");
	}
*/

/******************************************
* Function
*
function calculateAge(birthYear){
	return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	console.log(firstName + " retires in " + retirement + " years");
}


yearsUntilRetirement(1990, "john");

*/
/*****************************************
 *
 * Function statments and Expressions


//Function declaration
//function whatDoYouDo(job, firstName){}


// Function Expression
var whatDoYouDo = function(job, firstName){
	switch(job){
		case "teacher":
			return firstName + " teaches kids how to code";
		case "driver":
			return firstName + " drives uber";
		case "designer":
			return firstName + " designs a website";
		default:
			return firstName + " does something else";
	}

}

console.log(whatDoYouDo("teacher", "john"));
*/

/****************************
 * Arrays
 *

var names = ["john", "mark", "jane"];
var years = new Array(1990, 1969, 1948);
console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = "Ben";
names[names.length] = "mary";


// Different Data types
var john = ["john", "smith", 1990, "teacher"];

//add to the end
john.push("blue);
//Add to the beg
john.unshift("Mr.");
console.log(John);


john.pop();
john.pop();
john.shift();


console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf("designer)) === -1 ? "john isnt a Designer" : "john is a designer";
	console.log(isDesigner);

*/


/***************************************
 * Object and properties
 *
// Object literal
var john = {
		firstName: "John",
		lastName: "Smith",
		brithYear: "1990",
		family: ["Jane", "Mark", "Bob", "Emily"],
		job: "teacher",
		isMarried: false
};

console.log(john.firstName);
console.log(john["lastName"]); var x = "birthYear";
console.log(john[x]);

john.job = "designer";
john["isMarried"] = true;

console.log(john);


// New object syntax
var jane = new Object();
jane.name = "jane";

jane.birthYear = 1969;
jane.firstName = "Jane";
jane["lastName"] = "Smith";
console.log(jane);
*/

/****************************
 * Objects and methods
var john = {
		firstName: "John",
		lastName: "Smith",
		brithYear: "1990",
		family: ["Jane", "Mark", "Bob", "Emily"],
		job: "teacher",
		isMarried: false,
		calcAge: function(){
			this.age = 2018 - this.birthYear;
		}
};

john.calcAge();
console.log(john);

*/

/*******************************
 * Loops and iterations
 */

for (var i = 0; i < 10; i++){
	console.log(i);
}

var john = ["John", "Smith", 1990, "designer", false, "blue"];

for (var i = 0; i < john.length; i++){
	//console.log(john[i]);
}

while(i < john.length){
	//console.log(john[i]);
	i++;
}


// Continue and break statements
for (var i = 0; i < john.length; i++){
	if(typeof john[i] !== "string") continue;
	console.log(john[i]);
}

for (var i = 0; i < john.length; i++){
	if(typeof john[i] !== "string") break;
	console.log(john[i]);
}

// Looping backwards
for (var i = john.length-1; i >= 0; i--){
	console.log(john[i]);
}





