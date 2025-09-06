function greet(){
    console.log("hello santhosh")
}
greet()
function add(x,y){
    return x+y;
}
let result = add(10,20)
console.log(result)


const pi = 3.14;
console.log(`pi value is : ${pi}`)

const multiply = function (x,y){
    return x*y;
}
console.log(multiply(10,20))

//arrow functions

const square = (x) => x*x  
console.log(square(5))
const subtract = (x,y) =>{
    console.log(x,y)
    return x-y
}
console.log(subtract(20,10))