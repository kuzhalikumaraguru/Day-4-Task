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

// 5. Return all palindromes in an array

var fun = function (arr) {
    let result = [];
    for (var i = 0; i < arr.length; i++){
        var res = arr[i].split("").reverse().join("");
        if (res === arr[i]) {
            result.push(arr[i]);
        }
    }
    console.log(result, "Using Anonymous function - Return all palindromes in an array")
}
fun(["madam", "sir", "mom", "dad", "pop", "miss"]);

(function (arr) {
    let result = [];
    for (var i = 0; i < arr.length; i++){
        var res = arr[i].split("").reverse().join("");
        if (res === arr[i]) {
            result.push(arr[i]);
        }
    }
    console.log(result, "Using IIFE function - Return all palindromes in an array")
})(["madam", "sir", "mom", "dad", "pop", "miss"]);

var palindrome = (arr) => {
    let result = [];
    for (var i = 0; i < arr.length; i++){
        var res = arr[i].split("").reverse().join("");
        if (res === arr[i]) {
            result.push(arr[i]);
        }
    }
    console.log(result, "Using arrow function - Return all palindromes in an array")
}
palindrome(["madam", "sir", "mom", "dad", "pop", "miss"]);

// 6. Median of two sorted arrays

var median = function (arr1, arr2) {
    let arr = [...arr1, ...arr2];
    arr.sort((a, b) => a - b);
    var n = arr.length;
    if (arr.length % 2 === 0) {
        var res = (arr[n / 2] + arr[n / 2 - 1]) / 2;
    } else {
        var res = Math.floor(arr[n/2]);
    }
    console.log(res, "Using anonymous function - Return the median of two sorted array");
}
median([1, 2, 3, 4, 5], [3, 5, 7, 8, 9]);

(function (arr1, arr2) {
    let arr = [...arr1, ...arr2];
    arr.sort((a, b) => a - b);
    var n = arr.length;
    if (arr.length % 2 === 0) {
        var res = (arr[n / 2] + arr[n / 2 - 1]) / 2;
    } else {
        var res = Math.floor(arr[n/2]);
    }
    console.log(res, "Using IIFE function - Return the median of two sorted array");
})([1, 2, 3, 4, 5], [3, 5, 7, 8, 9]);

var median = (arr1, arr2) => {
    let arr = [...arr1, ...arr2];
    arr.sort((a, b) => a - b);
    var n = arr.length;
    if (arr.length % 2 === 0) {
        var res = (arr[n / 2] + arr[n / 2 - 1]) / 2;
    } else {
        var res = Math.floor(arr[n/2]);
    }
    console.log(res, "Using arrow function - Return the median of two sorted array");
}
median([1, 2, 3, 4, 5], [3, 5, 7, 8, 9]);

// 7. Rotate an array by k - times

var rotate = function (arr) {
    for (var i = 0; i < 3; i++){
        arr.push(arr.shift());
    }
    console.log(arr, "Using anonymous function - Rotate the array by k-times");
}
rotate([1, 2, 3, 4, 5]);

(function (arr) {
    for (var i = 0; i < 3; i++){
        arr.push(arr.shift());
    }
    console.log(arr, "Using IIFE function - Rotate the array by k-times");
})([1, 2, 3, 4, 5]);

