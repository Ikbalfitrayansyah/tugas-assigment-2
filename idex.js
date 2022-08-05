 
 let userForm = document.getElementsByClassName("container");
 let alertButton = document.getElementById("button");

 let userBmiValue= "";
 let userStatus = "";
 
 
 let formObject = new FormData(userForm);
   let formValue = Object.fromEntries(alertButton);
 
   userName = formValue.bmi;
   userComment = formValue.hasil;function Calculate(){
    let height = document.getElementById("h-input").value;
    let weight = document.getElementById("w-input").value;

    let result = parseFloat(weight) /(parseFloat(height)/100)**2;

    if(!isNaN(result)){
        document.getElementById("bmi-output").innerHTML = result;
        if(result < 18.5){
            document.getElementById("bmi-status").innerHTML = "Underweight";
        }
        else if(result > 18.5 <= 24){
            document.getElementById("bmi-status").innerHTML = "Normal";
        }
        else if(result > 25 <= 29.5){
            document.getElementById("bmi-status").innerHTML = "Overweight";
        }
        else{
            document.getElementById("bmi-status").innerHTML = "Obesity";
        }
    }
}