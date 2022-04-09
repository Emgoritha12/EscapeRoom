function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "20°40'59.0"N 88°34'7"W") {
    return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }