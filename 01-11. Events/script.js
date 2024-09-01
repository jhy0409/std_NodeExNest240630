// window.onload = function() {
//     // 문서 load될 때 이 함수를 실행
//     let text = document.getElementById('text');

//     text.innerText = 'html loaded'
// }

// const aElement = document.querySelector('a');
// aElement.addEventListener('click', () => {
//     alert('a element clicked');
// });

// const btnElement = document.querySelector('.btn2');
// btnElement.addEventListener('click', (event) => {
//     let val;
//     val = event.target;
//     val = event.target.id;
//     val = event.target.className;
//     val = event.target.classList;

//     val = event.type;
//     val = event.clientY; // 윈도우로부터 거리좌표
//     val = event.offsetY; // 요소로부터 거리좌표

//     console.log(val);
// });


// -------------------------------- 01-11 Events --------------------------------
// const submitBtn = document.querySelector('.submit-btn')
// const form = document.querySelector('form');
// const title = document.querySelector('h2');

// //CLICK EVENT
// submitBtn.addEventListener('click', handleEvent);
// submitBtn.addEventListener('dblclick', handleEvent);
// submitBtn.addEventListener('mousedown', handleEvent);
// submitBtn.addEventListener('mouseup', handleEvent);
// submitBtn.addEventListener('mouseenter', handleEvent);
// submitBtn.addEventListener('mousemove', handleEvent);

// function handleEvent(e) {
//     e.preventDefault(); // form submit event default action block
//     console.log(`\n${e.type}`);

//     title.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;
// }

//FORM EVENT
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const title = document.querySelector('h2');

form.addEventListener('submit', handleEvent);
// emailInput.addEventListener('keydown', handleEvents);
// emailInput.addEventListener('keyup', handleEvents);
// emailInput.addEventListener('keypress', handleEvents);

// emailInput.addEventListener('focus', handleEvents);
// emailInput.addEventListener('blur', handleEvents);
// emailInput.addEventListener('cut', handleEvents);
// emailInput.addEventListener('paste', handleEvents);
emailInput.addEventListener('input', handleEvents);

function handleEvent(e) {
    if (e.type === 'submit') {
        e.preventDefault(); // form submit event default action block
    }
    console.log(`\n${e.type}`);

    title.textContent = e.target.value;
}