// BUDGET CONTROLLER
var budgetController = (function(){

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems:{
            allExpenses: new Array(0),
            allIncomes: new Array(0)
        },
        totals:{
            exp: 0,
            inc: 0
        }
    };
    return {
        addItem: function(type, des, val){
           var newItem, ID;
           if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length-1].id + 1;
           }else{
                ID = 0;
           }

           if(type === "exp"){
                newItem = new Expense(ID, des, val);
           }else if (type === "inc"){
                newItem = new Income(ID, des, val);
           }
           data.allItems[type].push(newItem);
           return newItem;
        }
    };

})();


//UI CONTROLLER
var UIController = (function(){
    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn"
    };
    return{
        getinput: function(){
            return{
                type: document.querySelector(DOMstrings.inputType).value, // inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
          },

          getDOMstrings: function(){
              return DOMstrings;
          }
        };
   })();



// Global app controller 
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function(){

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

        document.addEventListener("keypress", function(event){
           if(event.keyCode === 13 || event.which === 13){
               ctrlAddItem();
           }
        });
    }

    var ctrlAddItem = function(){
                // 1. Get the filed input data
                var input = UICtrl.getinput();
                // 2. Add the items to the budget controller
                var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
                // 3. Add the item to the UI
                // 4. Caclculate the budget
                // 5. Display the budget on the uI

    }
    return{
        init: function(){
            console.log("Applicatoin has started")
            setupEventListeners();
        }
    }

})(budgetController, UIController);


controller.init();