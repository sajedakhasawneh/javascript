//task1
// function tellFortune(job, location, npartner, childs){
//         console.log("You will be a " + job + " in " + location + ", and married to "+ npartner + " with "+ childs + " kids.")
// }

// tellFortune('software engineer', 'Jordan', 'Alice', 3);




//task2
// function calculateDogAge(age){
//     let year = age * 7;
//     console.log("Your  doggie is " + year + " years old in dog years!")
// }

// calculateDogAge(2);




//task3
// function calculateSupply(age, amount){
//     let restage= 100-age;
//     let days= restage*365;
//     let results = days * amount;
//     console.log("You will need " + results + " cups of tea to last you until the ripe old age of 100")
// }

// calculateSupply(30,3);




//task4
// function greet(name){
//     console.log("hello " + name);
// }

// greet("Adam");




//task5
//1
//2 parameter is a number
//3 logical error number * string




//task6
//1 function double(x) {return 2*x};
//2 function double2 (x) {return 2*x};
//3 function double3 (x) {return 2*x}; 




//task7
// function cube(num){
//     let value= num * num *num;
//     return value;
// }
// console.log(cube(4));




//task8
// function multiply(num, num2){
//     let mulnums = num*num2;
//     return mulnums;
// }
// console.log(multiply(3,4));




//task9
// function canIGetADrivingLicense(age){
//     if (age >= 20)
//         return "yes you can";
//     else
//     {
//         years = 20 - age;
//         return "please come back after " + years +" years to get one"
//     }
        
// }

//  console.log (canIGetADrivingLicense(19));




//task10
// function sameLength(str1, str2){
//     if (str1.length == str2.length)
//         return "true";
//     else
//         return "falsse";
// }

// let stringlength = sameLength("tree", "car");
// console.log(stringlength);




//task11
// function largerNubmer(num1, num2){
//     if (num1 > num2)
//         return num1;
//     else
//         return num2;
// }

// console.log(largerNubmer(5,3));




//task12
// function smallerNubmer(num, num1,num2){
//     if ( num <= num1 && num <= num2)
//         return num;
//     if ( num1 <= num && num1 <= num2)
//         return num1;
//     if ( num2 <= num1 && num2 <= num)
//         return num2;
// }

// console.log(smallerNubmer(5,3,3));




//task13
// function shorterString(str1,str2,str3,str4,str5){
//     let array = [str1, str2, str3,str4,str5];
//     let min = 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss';
//     for(let i=0; i<array.length; i++){
//         if (array[i].length < min.length)
//             min = array[i];
//     }
//  return min;
// }
// console.log(shorterString("air","tr","car","github","by"));




//task14
// function longerString(str1,str2,str3,str4){
//     let array = [str1, str2, str3, str4];
//     let max = '';
//     for (let i=0; i< array.length; i++) {
//         if (array[i].length > max.length)
//             max = array[i];
//     }
//     return max;
// }
// console.log(longerString("air","school","car","github"))




//task15
// function isEven(num){
//     if ( num %2 ==0 )
//         return true;
//     else
//         return false;
// }

// console.log(isEven(3));




//task16
// function isOdd(num){
//     if ( num %2 != 0 )
//         return true;
//     else
//         return false;
//             }
            
// console.log(isOdd(3));




//task17
// function positive(num){
//     if (num < 0)
//         return num*-1;
//     else
//         return num;
// }

// console.log(positive(-5));




//task18
// function fullName(firstname, lastname){
//     let fulln = firstname + " " + lastname;
//     return fulln;
// }

// console.log(fullName("Adam","McCallen"));




//task19
// function average(num1,num2,num3,num4,num5){
//     let sum = num1 + num2 + num3 + num4 + num5;
//     let avg = sum/5;
//     return avg;
// }

// console.log(average(5,7,9,3,5))




//task20
// function randomNumber(){
//     return Math.random();
// }

// console.log(randomNumber());




//task21
// function randomBetweenNumbers(min, max){
//    return Math.random() * (max - min);
// }
// console.log(randomBetweenNumbers(3,100))




//task22
// function scoreInUniversty(grade){
//     if ( grade >=95 && grade <=100)
//         return "A";
//      else if ( grade >=85 && grade <=94)
//         return "B";
//     if ( grade >=70 && grade <=84)
//         return "C";
//     if ( grade >=50 && grade <69)
//         return "D";
//     else
//         return "F";

// }
// console.log(scoreInUniversty(87));




//task23
// var count = 0;
// function counter(){
//     count+=1;
//     return count;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());




// //task24
// function resetCounter(){
//     let temp = count;
//     count =0;
//     return  temp + " and the counter reset now";
// }

// console.log(resetCounter());
// console.log(counter());
