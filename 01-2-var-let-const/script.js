// var a = 1;
// console.log(a);

// var greeting = 'hello';
// console.log(greeting);

// var greeting = 'hi';
// console.log(greeting);

// var greeting = 'hi 2';
// console.log(greeting);


// 중복 선언 불가, 재할당은 가능
// let greeting = 'hello';
// console.log(greeting);

// greeting = 'hi';
// console.log(greeting);


// 중복 선언 불가, 재할당은 불가
// const greeting = 'hello';
// console.log(greeting);



// 01-3 scope
// 유효한 참조범위
// var => 함수 레벨 스코프
// function f() {
//     if (true) {
//         var a = 'a';
//         console.log(a);
//     }

//     console.log(a);
// }

// // console.log(a); // err
// f();


// let, const => block 레벨 스코프

function f() {
    if (true) {
        let a = 'a';
        console.log(a);
    }

    // console.log(a); // err
}

f();