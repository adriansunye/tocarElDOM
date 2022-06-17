/* 
========================================== 
Call Keypres library
========================================== 
*/

var listener = new window.keypress.Listener();

/* 
========================================== 
div elements 
========================================== 
*/

const C3 = document.getElementById("KEY_C,-1");
const C3S = document.getElementById("KEY_C#,-1");
const D3 = document.getElementById("KEY_D,-1");
const D3S = document.getElementById("KEY_D#,-1");
const E3 = document.getElementById("KEY_E,-1");
const F3 = document.getElementById("KEY_F,-1");
const F3S = document.getElementById("KEY_F#,-1");
const G3 = document.getElementById("KEY_G,-1");
const G3S = document.getElementById("KEY_G#,-1");
const A3 = document.getElementById("KEY_A,-1");
const A3S = document.getElementById("KEY_A#,-1");
const B3 = document.getElementById("KEY_B,-1");
const C4 = document.getElementById("KEY_C,0");
const C4S = document.getElementById("KEY_C#,0");
const D4 = document.getElementById("KEY_D,0");
const D4S = document.getElementById("KEY_D#,0");
const E4 = document.getElementById("KEY_E,0");
const F4 = document.getElementById("KEY_F,0");
const F4S = document.getElementById("KEY_F#,0");
const G4 = document.getElementById("KEY_G,0");
const G4S = document.getElementById("KEY_G#,0");
const A4 = document.getElementById("KEY_A,0");
const A4S = document.getElementById("KEY_A#,0");
const B4 = document.getElementById("KEY_B,0");
const C5 = document.getElementById("KEY_C,1");
const C5S = document.getElementById("KEY_C#,1");
const D5 = document.getElementById("KEY_D,1");
const D5S = document.getElementById("KEY_D#,1");
const E5 = document.getElementById("KEY_E,1");
const F5 = document.getElementById("KEY_F,1");
const F5S = document.getElementById("KEY_F#,1");
const G5 = document.getElementById("KEY_G,1");
const G5S = document.getElementById("KEY_G#,1");
const A5 = document.getElementById("KEY_A,1");
const A5S = document.getElementById("KEY_A#,1");
const B5 = document.getElementById("KEY_B,1");

/* 
========================================== 
Click event listeners creating audio file
========================================== 
*/

C3.addEventListener('click', () => soundNote('C', 3));
C3S.addEventListener('click', () => soundNote('CS', 3));
D3.addEventListener('click', () => soundNote('D', 3));
D3S.addEventListener('click', () => soundNote('DS', 3));
E3.addEventListener('click', () => soundNote('E', 3));
F3.addEventListener('click', () => soundNote('F', 3));
F3S.addEventListener('click', () => soundNote('FS', 3));
G3.addEventListener('click', () => soundNote('G', 3));
G3S.addEventListener('click', () => soundNote('GS', 3));
A3.addEventListener('click', () => soundNote('A', 3));
A3S.addEventListener('click', () => soundNote('AS', 3));
B3.addEventListener('click', () => soundNote('B', 3));
C4.addEventListener('click', () => soundNote('C', 4));
C4S.addEventListener('click', () => soundNote('CS', 4));
D4.addEventListener('click', () => soundNote('D', 4));
D4S.addEventListener('click', () => soundNote('DS', 4));
E4.addEventListener('click', () => soundNote('E', 4));
F4.addEventListener('click', () => soundNote('F', 4));
F4S.addEventListener('click', () => soundNote('FS', 4));
G4.addEventListener('click', () => soundNote('G', 4));
G4S.addEventListener('click', () => soundNote('GS', 4));
A4.addEventListener('click', () => soundNote('A', 4));
A4S.addEventListener('click', () => soundNote('AS', 4));
B4.addEventListener('click', () => soundNote('B', 4));
C5.addEventListener('click', () => soundNote('C', 5));
C5S.addEventListener('click', () => soundNote('CS', 5));
D5.addEventListener('click', () => soundNote('D', 5));
D5S.addEventListener('click', () => soundNote('DS', 5));
E5.addEventListener('click', () => soundNote('E', 5));
F5.addEventListener('click', () => soundNote('F', 5));
F5S.addEventListener('click', () => soundNote('FS', 5));
G5.addEventListener('click', () => soundNote('G', 5));
G5S.addEventListener('click', () => soundNote('GS', 5));
A5.addEventListener('click', () => soundNote('A', 5));
A5S.addEventListener('click', () => soundNote('AS', 5));
B5.addEventListener('click', () => soundNote('B', 5));

/* 
========================================== 
Function calling wav file using keys
========================================== 
*/

listener.simple_combo("q", function() {
    soundNote('C', 3);
});
listener.simple_combo("2", function() {
    soundNote('CS', 3);
});
listener.simple_combo("w", function() {
    soundNote('D', 3);
});
listener.simple_combo("3", function() {
    soundNote('DS', 3);
});
listener.simple_combo("e", function() {
    soundNote('E', 3);
});
listener.simple_combo("r", function() {
    soundNote('F', 3);
});
listener.simple_combo("5", function() {
    soundNote('FS', 3);
});
listener.simple_combo("t", function() {
    soundNote('G', 3);
});
listener.simple_combo("6", function() {
    soundNote('GS', 3);
});
listener.simple_combo("y", function() {
    soundNote('A', 3);
});
listener.simple_combo("7", function() {
    soundNote('AS', 3);
});
listener.simple_combo("u", function() {
    soundNote('B', 3);
});
listener.simple_combo("y", function() {
    soundNote('C', 4);
});
listener.simple_combo("9", function() {
    soundNote('CS', 4);
});
listener.simple_combo("o", function() {
    soundNote('D', 4);
});
listener.simple_combo("0", function() {
    soundNote('DS', 4);
});
listener.simple_combo("p", function() {
    soundNote('E', 4);
});
listener.simple_combo("[", function() {
    soundNote('F', 4);
});
listener.simple_combo("¡", function() {
    soundNote('FS', 4);
});
listener.simple_combo("]", function() {
    soundNote('G', 4);
});
listener.simple_combo("a", function() {
    soundNote('GS', 4);
});
listener.simple_combo("z", function() {
    soundNote('A', 4);
});
listener.simple_combo("s", function() {
    soundNote('AS', 4);
});
listener.simple_combo("X", function() {
    soundNote('B', 4);
});
listener.simple_combo("c", function() {
    soundNote('C', 5);
});
listener.simple_combo("f", function() {
    soundNote('CS', 5);
});
listener.simple_combo("v", function() {
    soundNote('D', 5);
});
listener.simple_combo("G", function() {
    soundNote('DS', 5);
});
listener.simple_combo("b", function() {
    soundNote('E', 5);
});
listener.simple_combo("n", function() {
    soundNote('F', 5);
});
listener.simple_combo("j", function() {
    soundNote('FS', 5);
});
listener.simple_combo("m", function() {
    soundNote('G', 5);
});
listener.simple_combo("k", function() {
    soundNote('GS', 5);
});
listener.simple_combo(",", function() {
    soundNote('A', 5);
});
listener.simple_combo("l", function() {
    soundNote('AS', 5);
});
listener.simple_combo(".", function() {
    soundNote('B', 5);
});

/* 
========================================== 
Function calling sound notes
========================================== 
*/

function soundNote(note, octave) {
  let playlist = new Array('media/sounds/grandPiano/C3.flac', 'media/sounds/grandPiano/CS3.flac', 'media/sounds/grandPiano/C4.flac', 'media/sounds/grandPiano/CS4.flac', 'media/sounds/grandPiano/C5.flac','media/sounds/grandPiano/CS5.flac', 'media/sounds/grandPiano/D3.flac', 'media/sounds/grandPiano/DS3.flac', 'media/sounds/grandPiano/D4.flac', 'media/sounds/grandPiano/D5.flac', 'media/sounds/grandPiano/DS5.flac', 'media/sounds/grandPiano/E3.flac', 'media/sounds/grandPiano/E4.flac', 'media/sounds/grandPiano/E5.flac', 'media/sounds/grandPiano/F3.flac', 'media/sounds/grandPiano/FS3.flac', 'media/sounds/grandPiano/F4.flac', 'media/sounds/grandPiano/FS4.flac', 'media/sounds/grandPiano/F5.flac', 'media/sounds/grandPiano/FS5.flac', 'media/sounds/grandPiano/G3.flac', 'media/sounds/grandPiano/GS3.flac', 'media/sounds/grandPiano/G4.flac', 'media/sounds/grandPiano/GS4.flac', 'media/sounds/grandPiano/G5.flac', 'media/sounds/grandPiano/GS5.flac', 'media/sounds/grandPiano/A3.flac', 'media/sounds/grandPiano/AS3.flac', 'media/sounds/grandPiano/A4.flac', 'media/sounds/grandPiano/AS4.flac', 'media/sounds/grandPiano/A5.flac', 'media/sounds/grandPiano/AS5.flac', 'media/sounds/grandPiano/B3.flac', 'media/sounds/grandPiano/B4.flac', 'media/sounds/grandPiano/B5.flac');
  let notaOctavo = note + "" + octave
  for(let i = 0; i<playlist.length; i++){
      if(playlist[i]=== 'media/sounds/grandPiano/' + notaOctavo + '.flac'){
             myAudio = new Audio(playlist[i]);
             myAudio.play();
             break;     
         }
  }
}


/* 
// funcion hover para imagenes

let overlay = document.querySelector(".overlay");
let icon = document.querySelector(".icon");

overlay.addEventListener("mouseover", function (event) {
//highlight the mouseover target
       if (icon.className == "icon") {
         icon.classList.remove("icon");
        icon.classList.add("icon-fade");
       }
     else {
       return
    }
   console.log(event)
 }, false);

 overlay.addEventListener("mouseout", function () {
   // highlight the mouseout target
   if (icon.className == "icon"){
     icon.classList.remove('icon-fade');
     icon.classList.add('icon')
   }
   else {
     return
   }
 console.log("exit")

   }, false); 
*/