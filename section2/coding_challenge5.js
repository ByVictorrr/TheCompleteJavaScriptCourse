/*****************************************8
 * CODING CHALLENGE 5
 *
 */

var johnBillObj = {
	bills: [124, 48, 268, 180, 42],
	tips: new Array(),
	finalBills: new Array(),
	calcTip: function(){
		for(var i = 0; i< this.bills.length; i++){
			if(this.bills[i] < 50){	
				this.tips[i] = this.bills[i] * .20;
			}else if(this.bills[i] >= 50 || this.bills[i] <= 200){
				this.tips[i] = this.bills[i] * .15;
			}else{
				this.tips[i] = this.bills[i] * .10;
			}
		}
	}
};

//Extra After finishing

var markBillObj = {
	bills: [77, 375, 110, 45],
	tips: new Array(),
	finalBills: new Array(),
	calcTip: function(){
		for(var i = 0; i< this.bills.length; i++){
			if(this.bills[i] < 100){
				this.tips[i] = this.bills[i] * .20;
			}else if(this.bills[i] >= 100 || this.bills[i] <= 300){
				this.tips[i] = this.bills[i] * .10;
			}else{
				this.tips[i] = this.bills[i] * .25;
			}
		}
	}
};


function calcAvgTips(tips){
	var sum = 0;
	for(var i = 0; i< tips.length; i++){
		sum += tips[i];
	}
	return sum/tips.length
}

function getFinalBills(tips, bills){
	var finalBillSum = new Array();
	for(var i = 0; i< bills.length; i++){
		finalBillSum[i] = tips[i]+bills[i];  
	}
	return finalBillSum; 
}


markBillObj.calcTip();
johnBillObj.calcTip();
markBillObj.finalBills = getFinalBills(markBillObj.tips, markBillObj.bills);
johnBillObj.finalBills = getFinalBills(johnBillObj.tips, johnBillObj.bills);

console.log(johnBillObj);
console.log(markBillObj);
console.log( calcAvgTips(markBillObj.tips) >  calcAvgTips(markBillObj.tips) ? "Mark's family paid highest tips on average" :  "John's family paid highest tips on average");




