var morse = {

  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "/": " "
};
var morseRev={'A': '.-',     'B': '-...',   'C': '-.-.',
        'D': '-..',    'E': '.',      'F': '..-.',
        'G': '--.',    'H': '....',   'I': '..',
        'J': '.---',   'K': '-.-',    'L': '.-..',
        'M': '--',     'N': '-.',     'O': '---',
        'P': '.--.',   'Q': '--.-',   'R': '.-.',
        'S': '...',    'T': '-',      'U': '..-',
        'V': '...-',   'W': '.--',    'X': '-..-',
        'Y': '-.--',   'Z': '--..',

        '0': '-----',  '1': '.----',  '2': '..---',
        '3': '...--',  '4': '....-',  '5': '.....',
        '6': '-....',  '7': '--...',  '8': '---..',
        '9': '----.',  ' ': '/',      '.':'.-.-.-',
        ',':'--..--',  ':':'---...',  '?':'..--..',
        '-':'-....-',  '@': '.--.-.', '=':'-...-',
        '(':'-.--.',   ')':'-.--.-',  '+':'.-.-.'};

var inp = document.getElementById("inp");
var butt = document.getElementById("butt");
var out = document.getElementById("out");

butt.addEventListener("click", function() {
  var conv = inp.value;
  conv = conv.toLowerCase();
  conv = conv.split(" ");
  for (var i = 0; i < conv.length; i++) {
    conv[i] = morse[conv[i]];
  }
  conv = conv.join("");
  console.log(conv);
  out.innerHTML = conv;
});


var inp1 = document.getElementById("inp1");
var butt1 = document.getElementById("butt1");
var out1 = document.getElementById("out1");

butt1.addEventListener("click", function() {
  var conv1 = inp1.value;
  conv1 = conv1.toUpperCase();
  conv1 = conv1.split("");
  for (var j = 0; j < conv1.length; j++) {
    conv1[j] = morseRev[conv1[j]];
  }
  conv1 = conv1.join(" ");
  console.log(conv1);
  out1.innerHTML = conv1;
});

function Riddle() {
   var password = document.getElementById("Riddle1");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "TO US LOST IS NEVER FOUND") {
    alert("You have found the Skull"); 
   return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }