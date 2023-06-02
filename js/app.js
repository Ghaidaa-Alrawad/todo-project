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
    
    if(gender === "male"){
        alert("Welcome Mr " + userName);
    }else if(gender === "female"){
        alert("Welcome Ms " + userName);
    }
}