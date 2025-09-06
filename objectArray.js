let person ={
    name : "chandu",
    age : 20,
    id : 569
}
for(let key in person){
    console.log(`${key} : ${person[key]}`)
}


const {name,age,id} = person; // destructuring assignment
console.log(name)
console.log(age)
console.log(id)

let fruits = ["mango","apple","banana"]
console.log(fruits[0])

let nums = [1,2,3,4,5]

let squares = nums.map((num) => num*num); // map method
console.log(squares)

let evens = nums.filter((num) => num%2 == 0); // filter metgod
console.log(evens)

let sum = nums.reduce(( num,first) => num+first); // reduce metgod
console.log(sum)

let persons =[
    {
    name : "santhosh",
    marks : 90
    },
    {
    name : "chandu",
    marks : 80
    },
    {
    name : "kalyan",
    marks : 75   
    }
]
   
for(let person of persons){
    console.log(person)
}
let max=0
let topper
for(let person of persons){
    if(person.marks> max) {
        max = person.marks
        topper = person.name
}
}
console.log(`topper is "${topper}" and he got ${max}`)
