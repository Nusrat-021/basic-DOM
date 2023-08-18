
// option-1
// getElementsByTagName
const liCollection = document.getElementsByTagName("li");
// console.log(liCollection);
for (const li of liCollection) {
  // console.log(li.innerText);
}

const allHeadings = document.getElementsByTagName("h1");
for (const h1 of allHeadings) {
  // console.log(h1.innerText);
}
// option 02
// getElementById
const fruitsTitle = document.getElementById("fruits-title");
// fruitsTitle.innerText = "Fruits changed by JS";
// console.log(fruitsTitle.innerText);

// option 3
// getElementByClassName
const places = document.getElementsByClassName("important-places");
for (const place of places) {
  // console.log(place.innerText);
}

// option 04
// querySelection
// const li = document.querySelector(".fruits-container li");
// console.log(li);

// option 05
// querySelectorAll
const someLi = document.querySelectorAll(".fruits-container li");
// console.log(someLi);
for (const li of someLi) {
  // console.log(li.innerHTML);
}

//style property
document.getElementById('fruits-title').style.textAlign='center';

//getAttribute() method
const title = document.getElementById('fruits-title');
// console.log(title);
const titleAttribute=title.getAttribute('id');
// console.log(titleAttribute);

// classList: 
const titleListClass = title.classList;
// console.log(titleListClass);  
// add new class
titleListClass.add('hello-world');

// remove a class
titleListClass.remove('hello-world');

// setAttribute() method
title.setAttribute('title','tooltip set by JavaScript');
// console.log(title.getAttribute('title'));


// innerHTML
/* const fruitsContainer = document.getElementsByClassName('fruits-container')[0].innerHTML='<h2>WOW DOM is changing</h2>';
console.log(fruitsContainer); */







