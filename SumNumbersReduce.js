/*Sum all numbers in a range
We'll pass you an array of two numbers. Return the sum of those two numbers 
and all numbers between them.*/
function sumAll(arr){
//variable to hold the 2 numbers and all numbers in between

var numbers =[];
var min = Math.min(arr[0],arr[1]);
var max = Math.max(arr[0],arr[1]);
//push all numbers from min to max into the numbers array
for(var i= min;i<= max;i++){
numbers.push(i);
}

//use array.prototype.reduce() function to sum min, max and all numbers between min and max  

var result = numbers.reduce(function(a,b){
return a+b;
});
return result;
}
sumAll([1, 4]);