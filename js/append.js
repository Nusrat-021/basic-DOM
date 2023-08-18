
// 01. where to add: get the parent element
const placesList = document.getElementById('places-list');
// console.log(placesList);

// 02. what to be added: create a new element
const li = document.createElement('li');

// set the value of new element
li.innerText='pahartoli bon';

// 03. add the child/new element
placesList.appendChild(li);

// adding a total section
const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');


// innerText to create and add new element
const h1 = document.createElement('h1');
h1.innerText='My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='biriyani';
ul.appendChild(li1);

const li2= document.createElement('li');
li2.innerText='borhani';
ul.appendChild(li2);

const li3= document.createElement('li');
li3.innerText='salad';
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);

// set innerHTML directly
const sectionDress = document.createElement('section');

sectionDress.innerHTML=`
    <h1>My Dress Section</h1>
    <ul>
        <li>Three piece</li>
        <li>Shari</li>
        <li>Hijab</li>
    </ul>
`;

mainContainer.appendChild(sectionDress);