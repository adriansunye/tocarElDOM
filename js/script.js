/* 
========================================== 
Call Synth library 
========================================== 
*/

Synth instanceof AudioSynth; // true

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth; // true

testInstance === Synth; // true

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
Click Event Listeners for each div
========================================== 
*/

C3.addEventListener('click', () => soundNote('piano', 'C', 3, 2));
C3S.addEventListener('click', () => soundNote('piano', 'C#', 3, 2));
D3.addEventListener('click', () => soundNote('piano', 'D', 3, 2));
D3S.addEventListener('click', () => soundNote('piano', 'D#', 3, 2));
E3.addEventListener('click', () => soundNote('piano', 'E', 3, 2));
F3.addEventListener('click', () => soundNote('piano', 'F', 3, 2));
F3S.addEventListener('click', () => soundNote('piano', 'F#', 3, 2));
G3.addEventListener('click', () => soundNote('piano', 'G', 3, 2));
G3S.addEventListener('click', () => soundNote('piano', 'G#', 3, 2));
A3.addEventListener('click', () => soundNote('piano', 'A', 3, 2));
A3S.addEventListener('click', () => soundNote('piano', 'A#', 3, 2));
B3.addEventListener('click', () => soundNote('piano', 'B', 3, 2));
C4.addEventListener('click', () => soundNote('piano', 'C', 4, 2));
C4S.addEventListener('click', () => soundNote('piano', 'C#', 4, 2));
D4.addEventListener('click', () => soundNote('piano', 'D', 4, 2));
D4S.addEventListener('click', () => soundNote('piano', 'D#', 4, 2));
E4.addEventListener('click', () => soundNote('piano', 'E', 4, 2));
F4.addEventListener('click', () => soundNote('piano', 'F', 4, 2));
F4S.addEventListener('click', () => soundNote('piano', 'F#', 4, 2));
G4.addEventListener('click', () => soundNote('piano', 'G', 4, 2));
G4S.addEventListener('click', () => soundNote('piano', 'G#', 4, 2));
A4.addEventListener('click', () => soundNote('piano', 'A', 4, 2));
A4S.addEventListener('click', () => soundNote('piano', 'A#', 4, 2));
B4.addEventListener('click', () => soundNote('piano', 'B', 4, 2));
C5.addEventListener('click', () => soundNote('piano', 'C', 5, 2));
C5S.addEventListener('click', () => soundNote('piano', 'C#', 5, 2));
D5.addEventListener('click', () => soundNote('piano', 'D', 5, 2));
D5S.addEventListener('click', () => soundNote('piano', 'D#', 5, 2));
E5.addEventListener('click', () => soundNote('piano', 'E', 5, 2));
F5.addEventListener('click', () => soundNote('piano', 'F', 5, 2));
F5S.addEventListener('click', () => soundNote('piano', 'F#', 5, 2));
G5.addEventListener('click', () => soundNote('piano', 'G', 5, 2));
G5S.addEventListener('click', () => soundNote('piano', 'G#', 5, 2));
A5.addEventListener('click', () => soundNote('piano', 'A', 5, 2));
A5S.addEventListener('click', () => soundNote('piano', 'A#', 5, 2));
B5.addEventListener('click', () => soundNote('piano', 'B', 5, 2));

/* 
========================================== 
Functions for keypress
========================================== 
*/

listener.simple_combo("q", function() {
    soundNote('piano', 'C', 3, 2);
});
listener.simple_combo("2", function() {
    soundNote('piano', 'C#', 3, 2);
});
listener.simple_combo("w", function() {
    soundNote('piano', 'D', 3, 2);
});
listener.simple_combo("3", function() {
    soundNote('piano', 'D#', 3, 2);
});
listener.simple_combo("e", function() {
    soundNote('piano', 'E', 3, 2);
});
listener.simple_combo("r", function() {
    soundNote('piano', 'F', 3, 2);
});
listener.simple_combo("5", function() {
    soundNote('piano', 'F#', 3, 2);
});
listener.simple_combo("t", function() {
    soundNote('piano', 'G', 3, 2);
});
listener.simple_combo("6", function() {
    soundNote('piano', 'G#', 3, 2);
});
listener.simple_combo("y", function() {
    soundNote('piano', 'A', 3, 2);
});
listener.simple_combo("7", function() {
    soundNote('piano', 'A#', 3, 2);
});
listener.simple_combo("u", function() {
    soundNote('piano', 'B', 3, 2);
});
listener.simple_combo("y", function() {
    soundNote('piano', 'C', 4, 2);
});
listener.simple_combo("9", function() {
    soundNote('piano', 'C#', 4, 2);
});
listener.simple_combo("o", function() {
    soundNote('piano', 'D', 4, 2);
});
listener.simple_combo("0", function() {
    soundNote('piano', 'D#', 4, 2);
});
listener.simple_combo("p", function() {
    soundNote('piano', 'E', 4, 2);
});
listener.simple_combo("[", function() {
    soundNote('piano', 'F', 4, 2);
});
listener.simple_combo("¡", function() {
    soundNote('piano', 'F#', 4, 2);
});
listener.simple_combo("]", function() {
    soundNote('piano', 'G', 4, 2);
});
listener.simple_combo("a", function() {
    soundNote('piano', 'G#', 4, 2);
});
listener.simple_combo("z", function() {
    soundNote('piano', 'A', 4, 2);
});
listener.simple_combo("s", function() {
    soundNote('piano', 'A#', 4, 2);
});
listener.simple_combo("X", function() {
    soundNote('piano', 'B', 4, 2);
});
listener.simple_combo("c", function() {
    soundNote('piano', 'C', 5, 2);
});
listener.simple_combo("f", function() {
    soundNote('piano', 'C#', 5, 2);
});
listener.simple_combo("v", function() {
    soundNote('piano', 'D', 5, 2);
});
listener.simple_combo("G", function() {
    soundNote('piano', 'D#', 5, 2);
});
listener.simple_combo("b", function() {
    soundNote('piano', 'E', 5, 2);
});
listener.simple_combo("n", function() {
    soundNote('piano', 'F', 5, 2);
});
listener.simple_combo("j", function() {
    soundNote('piano', 'F#', 5, 2);
});
listener.simple_combo("m", function() {
    soundNote('piano', 'G', 5, 2);
});
listener.simple_combo("k", function() {
    soundNote('piano', 'G#', 5, 2);
});
listener.simple_combo(",", function() {
    soundNote('piano', 'A', 5, 2);
});
listener.simple_combo("l", function() {
    soundNote('piano', 'A#', 5, 2);
});
listener.simple_combo(".", function() {
    soundNote('piano', 'B', 5, 2);
});

/* 
========================================== 
Function calling synth sound
========================================== 
*/

function soundNote(instrument, note, octave, duration) {
  Synth.play(instrument, note, octave, duration);
}