/*****************************
 * Coding Challenge 4
 *
 */

//1) For each john an mark create an object with props for their full name, mass and height
var john = {
	fullName: "John Delaplaine",
	mass: 28,
	height: 92,
	bmi: function(){
		return this.mass/(this.height*this.height);
	}
};

var mark = {
	fullName: "Mark Delaplaine",
	mass: 83,
	height: 100,
	bmi: function(){
		return this.mass/(this.height*this.height);
	}
};

// Returns the person  with the highest BMI
function getHighestBMI(person1, person2){
	var flag;
	// Step 1 - find highest bmi person
	if(person1.bmi() === person2.bmi()){
		flag = "tied";
	}else if(person1.bmi() > person2.bmi()){
		flag = person1.fullName;
	}else{
		flag = person2.fullName;
	}
	//Step 2 - switch the flag and return a string 
	switch(flag){
		case person1.fullName:
			return flag + " has a BMI = " + person1.bmi(); 
		case person2.fullName:
			return flag + " has a BMI = " + person2.bmi(); 
		case "tied":
			return person1.fullName + " and " + person2.fullName + " has a BMI = " + person2.bmi(); 
		default:
			return "something is wrong";
	}
}

console.log(getHighestBMI(john, mark));




