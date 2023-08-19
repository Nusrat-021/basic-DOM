
// IMPORTANT: useful
// Option 02: to add a event
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 03 : will use this 
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
/* makeBlueButton.onclick = function makeBlue(){
    document.body.style.backgroundColor='blue';
} */

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}


// option 04
const purpleButton = document.getElementById('make-purple');
purpleButton.addEventListener('click',function(){
    document.body.style.backgroundColor='purple';
})

// pink
// option 04 another
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink);

function makePink(){
  document.body.style.backgroundColor='pink';
}

// green
// option 04 : another
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click',function(){
  document.body.style.backgroundColor='green';
}) 

// goldenrod
// direct
// final

document.getElementById('make-goldenrod').addEventListener('click',function(){
  document.body.style.backgroundColor='goldenrod';
})