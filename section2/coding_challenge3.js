/**********CODING CHALLENGE 3*************/
var bills = [124, 48, 268];

function tipCalc(bill){
	if(bill < 50){
		return .2 * bill;
	}else if (bill >= 50 || bill <= 200){
		return .15 * bill;
	}else{
		return .1 * bill;
	}
}

//1)
	var tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
//2)
	var finalBill = [tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]];

	console.log(tips);
	console.log(finalBill);


