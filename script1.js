function Riddle() {
   var password = document.getElementById("Riddle1");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "MAP") {
    alert("correct"); 
   return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }
function Riddle() {
   var password = document.getElementById("Riddle2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "AZTEC") {
    alert("correct"); 
   return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }