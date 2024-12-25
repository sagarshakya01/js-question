// let printNumber = [1,2,3,4,5];
// let sum = 0;
// for(let i = 0; i < printNumber.length; i++){
//      sum = sum + printNumber[i]

// }
    
//     console.log(sum);

// 1->Write a program to check if a number is positive, negative, or zero using if-else statements.
// let number = 1;
// if(number >= 0){
//      console.log("Number is positive");
// }else if(number <= 0){
//      console.log("Number is negative");
// }else if(number == 0){
//      console.log("Number is zero");
// }


// 2->Write a program that accepts three numbers and determines the largest among them using if, else if, and else statements.

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;

// if(num1 > num2 || num1 > num3 ){
//       console.log("The largest number is: " + num1);
// }else if ( num2 > num3  ){
//      console.log(`The largest number is : ${num2}`);
// }else {
//      console.log(`The largest number is : ${num3}`);
// }


// 3->Write a program that accepts a number and checks whether it is divisible by 2, 3, or both. Use if, else if, and else.

// let number =30;

// if (number%2==0 && number%2==0){
//      console.log("Number is divisible by both 2 and 3");
// }else if (number%3==0){
//      console.log("Number is divisible by 3");
// }else if(number%2 == 0){
//      console.log("Number is divisible by 2");
// }

// 4->Write a program to check if a number is divisible by 5. If it is, log "Divisible by 5", otherwise log "Not divisible by 5".

// let number = 5;
// if(number%5==0){
//      console.log("Divisible by 5");
// }else {
//      console.log("Not divisible by 5");
// }


// 5->Write a program to determine whether a given character is a vowel or a consonant. Use if and else statements.


//  let character = 'e';
//  if(character === 'a'|| character === 'e' || character === 'i' || character === 'o' || character === 'u'){
//       console.log("Character is a vowel");
//  }else {
//      console.log("Character is a consonant");
//  }


// 6->Write a program to determine whether a person is eligible to vote. Check if the age is 18 or above. If the age is below 18, log "Not eligible to vote"


// let age = 17;
// if (age >= 18){
//      console.log("Eligible to vote");
// }else if (age < 18){
//      console.log("Not eligible to vote");
// }

// 7->Write a program that takes a number as input and determines whether it is positive, negative, or zero using if, else if, and else.

// let number = 0;
// if(number > 0 ){
//      console.log("Number is positive");
// }else if (number < 0){
//      console.log("Number is negative");
// }else {
//      console.log("Number is zero");
// }


// 8->Write a program to find the largest of three numbers using if, else if, and else.

// let number = [0, 1, 2,3,4,5,6]
// let max = [0]
// for (let i= 0 ; i<number.length; i++){
//      if(number[i]>max[0]){
//           max[0] = number[i];
//      }
     
// }
// console.log("Largest number is: " + max[0]);


// 9->Write a program to determine whether a given number is divisible by both 3 and 5, only 3, only 5, or neither.
// let number = 30;
// if(number%3==0 && number%5==0){
//      console.log("Number is divisible by both 3 and 5");
// }else if(number%3==0){
//      console.log("Number is divisible by 3");
// }else if (number%5==0){
//      console.log("Number is divisible by 5");
// }






// ######################## 24/12/24 ###########################

// Convert the following function into a curried function:
// function multiply(a, b, c) {
//     return a * b * c;
// }
// How would you create a curried function to calculate the area of a rectangle, where the first function accepts length and the second function accepts width?
// What happens if you call a curried function with fewer arguments than required?
// concatenate a string using curring
// function concatenate(a, b, c) {
//     return a + b + c;
// }



// 1.


// function multyply(a){
//     return (b)=>{
//         return (c) => {
//             return a * b * c;
//         }
//     }
// }

// let multiplyByThree = multyply(3);

// console.log(multiplyByThree(4)(5)); 



// 2.
// function rectangle(lenght){
//     return (width) => {
//         return lenght*width;
//     }
// }

// let areaOfRectangle = rectangle(5);

// console.log(areaOfRectangle(3));



// 3.
// function string(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }

// let concatenateString = string("Hello");

// console.log(concatenateString("World")("!"));

// 4.
// function sum(a){
//     return(b)=>{
//         return(c)=>{
//             return a + b + c;
//         }
//     }
// }
// console.log(sum()(3)(4));



  
