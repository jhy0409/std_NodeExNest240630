// window.onload = function() {
//     // 문서 load될 때 이 함수를 실행
//     let text = document.getElementById('text');

//     text.innerText = 'html loaded'
// }

// const aElement = document.querySelector('a');
// aElement.addEventListener('click', () => {
//     alert('a element clicked');
// });

const btnElement = document.querySelector('.btn2');
btnElement.addEventListener('click', (event) => {
    let val;
    val = event.target;
    val = event.target.id;
    val = event.target.className;
    val = event.target.classList;

    val = event.type;
    val = event.clientY; // 윈도우로부터 거리좌표
    val = event.offsetY; // 요소로부터 거리좌표

    console.log(val);
});