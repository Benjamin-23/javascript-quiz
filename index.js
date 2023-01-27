let countel = document.getElementById("count");
let count = 0

function incrementCount () { 
  count += 1
  countel.innerHTML = count
} 
array 
let num = [1,1,3]
let target = 5
let  newList = []
let numLength = num.length
console.log(numLength);
const newNum = num.push(45)
console.log(num)
function getSum (num, target){
  let sum = 0
  for(let i of num){

    sum +=i
    if (sum === target)
    newList += i   
   
  }
  console.log(sum);
   return newList
}
console.log(getSum(num, target));

// case array = [1,2,3,1,5]
// target = 5
// return: [ [1,3,1],[2,3],[5] ]

const  combinationSum = (marks,target) =>{
    let arr2 = [] ;
    let sumOfTarget = 0;
     for(let i = 0; i < marks.length; i++){
        // console.log(`my marks : ${marks[i]}`);
        for(let j = 0; j < marks.length; j++){
        // console.log(`my j is: ${marks[j]}`);
           sumOfTarget = marks[i] + marks[j]
           
           if(sumOfTarget%target == 0){
            //  push values
             arr2.push(marks[i], marks[j])
             return arr2
           }   
        }
     }
     
}
console.log(combinationSum([1,2,3,4], 2));
function squareRoot(n){
   for(let i = 2; i <= n; i*2){
      return i
   }
   
}
console.log(squareRoot(9));

function solution (number,b){
   let pairs = 0
   for(let i = 0; i < number.length; i++){
      for(let j = i+1; j < number.length-i+1; j++){
         let sum = number[i] + number[j]
         if(sum % b == 0){
            pairs++
         }
      }
   }
   return pairs
}

console.log(solution([1,2,3,4,4,4], 2));