/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

*/

(function(){
     function Question(question, answer, correctAnswer){
        this.question = question;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
    }
    var questions = [new Question("What is a scripting language?\n(1)python\n(2)C++\n(3)Java\n(4)css\n(q)quit", -1, 1), 
                        new Question("What is Cal poly's mascott?\n(1)seal\n(2)food\n(3)mustang\n(4)your mom\n(q)quit", -1, 3)
    ];
    /*
    4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
    */
    function randomizeQuestions(questions){
        var randomIndex = Math.floor(Math.random()*questions.length);
        return questions[randomIndex];
    }

game: while(true){
        var selectedQuestion = randomizeQuestions(questions);
        console.log(selectedQuestion.question)
        selectedQuestion.answer = prompt("Please enter the number to your question");
            if(selectedQuestion.answer == selectedQuestion.correctAnswer){
                console.log("you selected the right answer");
                continue game;
            }else if(selectedQuestion.answer == -1){
                console.log("didnt enter anything in the prompt");
                continue game;
            }else if (selectedQuestion.answer == "q"){
                break;
            }else{
                console.log("wrong answer the right answer is " + selectedQuestion.correctAnswer);
                continue game;
            }
    }
})();
