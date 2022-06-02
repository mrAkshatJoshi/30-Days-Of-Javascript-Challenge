let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

let nums = [1, 2, 3]
let numbers1 = [1, 2, 3]
console.log(nums == numbers1) // false
/*This is because JavaScript object type compares the references for the variables instead of just the values. When you need to check for the equality of two arrays, you’ll need to write some code to work around the equality operators == and === result.

There are two ways you can check for array equality in JavaScript:
1) Using every() and includes() method*/
//every()
let arrOne11 = [1, 5, 6, 6];
let arrTwo22 = [1, 6, 5];

let result1 = arrOne11.every(function (element) {
  return arrTwo22.includes(element);
});

console.log(result); // true
//To handle the length differences, you need to check if the length property of both arrays is equal as shown below:

let arrOne = [1, 5, 6, 6];
let arrTwo = [1, 6, 5];

let result =
  arrOne.length === arrTwo.length &&
  arrOne.every(function (element) {
    return arrTwo.includes(element);
  });

console.log(result); // false
/*
2) Using a for loop and the indexOf() method 
refer to link : https://sebhastian.com/javascript-array-equality/#:~:text=This%20is%20because%20JavaScript%20object%20type%20compares%20the,you%20can%20check%20for%20array%20equality%20in%20JavaScript%3A
*/


let userOne1 = {
  name: 'Akshat',
  role: 'js Developer',
  country: 'India'
}
let userTwo2 = {
  name: 'Akshat',
  role: 'js Developer',
  country: 'India'
}
console.log(userOne1 == userTwo2) // false

let numbers = nums
console.log(nums == numbers)  // true

let userOne = {
name:'Akshat',
role:'js Developer',
country:'India'
}
let userTwo = userOne
console.log(userOne == userTwo)  // true