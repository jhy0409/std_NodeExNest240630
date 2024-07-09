let headerContainer = document.getElementById("header-container");
headerContainer.textContent = 'Text Content';
headerContainer.innerText = 'Inner Text';
headerContainer.innerHTML = '<span>Inner HTML</span>';

const items = document.getElementsByClassName( 'list-group-item');
console.log(items);
items[0].style.color = 'blue';
items[8].textContent = 'Hi';

let lists = document.getElementsByTagName('li');
// console.log(lists);
// lists.torEach((list) => {
//     list
// });

lists = Array.from(lists);
console.log (lists);
lists.forEach()

lists.forEach((list, index) => {
    list.textContent = `${index}. List`;
});    

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liOdd = document.querySelectorAll('li:nth-child(2n+1)');
const liOdd = document.querySelectorAll('li:nth-child(odd)');


liOdd.forEach((li, index) => {
    li.style.backgroundColor = '!red';
    li.textContent = `${index}. List`;
});
