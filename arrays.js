//Write a function that accepts an array of strings and 
//console.logs each element using a for loop.

let num=[12,34,56,78,15,98,30]
for(let i=0; i<num.length; i++){
    console.log(num[i])
}

//Write a function that accepts an array of numbers and
// uses the forEach() method to console.log each number multiplied by 2.
let numbers=[1,23,45,65,78,14,89]
numbers.forEach(function(number,i){
    numbers[i]*=2;
    i++
})
console.log(numbers)



//Write a function that takes in an array of numbers and 
//consoles the first four items multiplied by 8 and the last two added by 5.
// Console the array with the new values
let numArray=[10,67,56,43,90,45]
function num(numArray){
    for( let m=0; m<4; m++){
    arrNum5[m]=arrNum5[m]*8
    }
    arrNum5(arrNum5.length-2)+=5;
    arrNum5(arrNum5.length-1)+=5
    console.log(arrNum5)
}
num(arrNum5)




//Write a function that takes in the following array and 
//use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
for(let i=0; i<num.length; i++){
    if(i ===4){
        break;
    }
    console.log({"break":num[i]})
}

//Write a function that takes in a an array of strings and 
//use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']
function fruit(fruits){
for(let i=0; i<fruits.length; i++){
    if(i ===2){
        continue;
    }
    console.log({"continue":fruits[i]})
}
}
fruit(fruits)