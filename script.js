// Using anonymous function - function which doesn't have function name
// IIFE - Immediately invoked function expression

// 1. Print odd numbers in an array

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = function (array) {
    let result = [];
    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0) {
            result.push(array[i])
        }
    }
    return result
}
oddNumbers(a);
console.log(oddNumbers(a), "Using Anonymous function - Odd numbers in an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");

(function (array) {
    let result = [];
    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0) {
            result.push(array[i])
        }
    }
    console.log(result, "Using IIFE function - Odd numbers in an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
})(a)

var arrow = (array) => {
    let result = [];
    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0) {
            result.push(array[i])
        }
    }
    return result;
}
arrow(a)
console.log(arrow(a), "Using Arrow functions - Odd numbers in an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]")

// 2.Convert all the strings to title caps in a string array

const arr = ["hi", "how", "are", "you"];
var caps = function (arr) {
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i].toUpperCase();
    }
    return arr;
}
caps(arr);
console.log(caps(arr), "Using Anonymous function - Convert all the strings to title caps in a string array");

(function (arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    console.log(arr, "Using IIFE function - Convert all the strings to title caps in a string array");
})(["Iam", "fine", "you"]);

var arrowfunction = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    return arr;
}
arrowfunction(["Iam", "Kuzhali"]);
console.log(arrowfunction(["Iam", "Kuzhali"]), "Using arrow function - Convert all the strings to title caps in a string array")
 
// 3.Sum of all numbers in an array

const array = [1, 2, 3, 4, 5];
var anonymous = function (arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
anonymous(array);
console.log(anonymous(array),"Using Anonymous function - Sum of all numbers in an array");

(function (arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum, "Using IIFE function - Sum of all numbers in an array");
})(array);

var sumArrow = (arr) => {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
sumArrow(array);
console.log(sumArrow(array), "Using arrow function - Sum of all numbers in an array")


