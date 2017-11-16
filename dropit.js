/* Drop it Drop the elements of an array (first argument),starting from the front, until the predicate (second argument) returns true.
The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
Return the rest of the array, otherwise return an empty array.*/

function dropElements(arr, func) {
  // Drop them elements.
  //check through while loop if the value of function func for the first index of array is not met (is false)
  
while (!func(arr[0])){
  //while func of first index of array is false shift the array by one element
  arr.shift();
}
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
