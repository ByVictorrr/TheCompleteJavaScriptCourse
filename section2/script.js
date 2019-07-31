/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge)

//Undefined
var job;
console.log(job);

job = "Teacher";
console.log(job);
*/

/*====== Variabale mutations and type coercion=========*/
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
