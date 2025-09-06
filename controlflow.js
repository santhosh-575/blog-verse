// if -- if else -- if else if ladder --nested if else 
let m= 90;
if(m >=90){
    console.log("execellent")
}
else if(m>=80){
    console.log("good")
}
else if(m>=60){
    console.log("not bad")
}
else {
      console.log("bad")
}

// switch case

let day = 5;
switch(day){
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log("enter valid integer")
        break;
}


//loops
/*
let s=10;
while(s != 0){
    console.log(s--)
}

for(let i=0;i<=10;i++){
    console.log(i)
}
let k=0
do{
    console.log(k++)
}while(k != 10)
*/

let colors = ["blue","green","black","red"]
for(let color of colors){
    console.log(color)
}

let person = {
    name : "chandu",
    age : 20,
    id : 569
}
for(let key in person){
    console.log(`${key} : ${person[key]}`)
}