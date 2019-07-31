/*CODING CHALLENGE 2
	/*
	 * John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
	 * 1. Calculate the average score for each team
	 * 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
	 * 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
	 * 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
	 * 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
	 * GOOD LUCK 😀
	 * */
	/*
	 *
	 */

//1.
	var johnTeamScores = [89, 120, 103], mikeTeamScores = [116, 94, 123], maryTeamScores = [97,135,105];
	var johnTeamAvg = (johnTeamScores[0] + johnTeamScores[1] + johnTeamScores[2])/3;
	var mikeTeamAvg = (mikeTeamScores[0] + mikeTeamScores[1] + mikeTeamScores[2])/3;
	var maryTeamAvg = (maryTeamScores[0] + maryTeamScores[1] + maryTeamScores[2])/3;
	var flag;
//2. 
	//tie
	if(mikeTeamAvg === johnTeamAvg){
		flag = "equal";
	}else if(MikeTeamAvg > johnTeamAvg){	
		flag = "mike"
	}else{
		flag = "john"
	}
	switch (flag){
		case "equal":
			if(maryTeamAvg === johnTeamAvg){
				flag = "equal;
			}else if (maryTeamAvg > JohnTeamAvg){
				flag = "mary";
			}else{
				flag = "john and mike";
			}
			break;
		case "mike":
			if(maryTeamAvg === mikeTeamAvg){
				flag = "mary and mike";
			}else if (maryTeamAvg > mikeTeamAvg){
				flag = "mary";
			}else{
				flag = "mike";
			}
			break;
		case "john":
			if(maryTeamAvg === johnTeamAvg){
				flag = "mary and john";
			}else if (maryTeamAvg > johnTeamAvg){
				flag = "mary";
			}else{
				flag = "john";
			}
			break;
		default:

	}

	console.log("highest scoring team were :  " + flag); 
	console.log("avg for mikes " + mikeTeamAvg);
	console.log("avg for john " + johnTeamAvg);	
	console.log("avg for mary " + maryTeamAvg);

