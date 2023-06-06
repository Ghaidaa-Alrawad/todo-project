var skipMessage = confirm("Do you want to skip the welcoming message?, Press OK to go to the home page, Press Cancel to Welcome you properly :D");
if (!skipMessage){

    var userName = prompt("Hey heyyy please tell me your name: ");
    
    var gender = prompt("Enter your gender(male|female): ");
    
    if(gender != "male" && gender != "female"){
        alert("The gender should be male or female, please try again :)");
    }
    
    var age = prompt("Enter your age please: ");
    
    if(age <= 0){
        alert("Age must be greater than 0");
    }

    // here the Yes or No Qs for lab 6: 

    const questions = ["Is the sky blue?", "Is water wet?", "Do birds have feathers?"];
    const answers = [];
    
    //function 1
    function pushQustionsToArray(){
        
        for (let i = 0; i <questions.length; i++){
            var answer = prompt(questions[i] + " answer with Yes|No");
            if (answer.toLowerCase !== "Yes" && answer.toLowerCase !== "No" && answer =="") {
                answer = "invalid";
            }
            answers.push(answer);
        }
        
    }

    //function 2 (Traverse)
    function print(){
        for (let i = 0; i < answers.length; i++) {
            console.log(answers[i]);
        }
        // console.log(answers);
    }

    pushQustionsToArray();
    print();

    if(gender === "male"){
        alert("Welcome Mr " + userName + " Thank you for answering :D");
    }else if(gender === "female"){
        alert("Welcome Ms " + userName + " Thank you for answering :D");
    }
}