let foo = 42
foo = 'bar'
foo = true 

console.log(typeof(foo))


// 원시 타입

// 문자열 String
const name = "han"

// Number
const age = 30

// Boolean
const hasJob = true

// null
const car = null

// undefined
let empty

let sym = Symbol();


// 참조 타입
// Array
const hobbies = ['walking', 'books']

// Object
const addrs = {
    province: '경기도',
    city: '성남시'
}

console.log(hobbies)
console.log(Array.isArray(hobbies))