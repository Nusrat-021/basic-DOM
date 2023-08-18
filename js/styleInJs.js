const sections = document.querySelectorAll('section');
// console.log(sections);

for(const section of sections){
    section.style.border='2px solid steelblue';
    section.style.marginBottom='5px';
    section.style.borderRadius='15px';
    section.style.paddingLeft='7px';
    section.style.backgroundColor='lightgray';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor='lightyellow';

const placesContainer = document.getElementById('places-container');

placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');

// console.log(placesContainer.childNodes);
console.log(placesContainer.childNodes);


// getting one element
const placeURL = document.querySelector('#places-container ul');
console.log(placeURL);

// creating a new element using createElement() method
const newLi = document.createElement('li');
newLi.innerText='Brand new place to go';
placeURL.appendChild(newLi);
console.log(placeURL);

const newLi2 = document.createElement('li');
newLi2.innerText='another dynamic li';
placeURL.appendChild(newLi2)
