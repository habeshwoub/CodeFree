  /*using Array.prototype.indexOf() method 
  which returns the first index at which a given element can be found in the array, or -1 if it is not present*/
function diffArray(arr1, arr2) {
var newArr = [];

//use forEach() to check if each element  of arr1 is not indexed in arr2
arr1.forEach(function(val){
if(arr2.indexOf(val)== -1){
newArr.push(val);
}
});
//use forEach() to check if each element  of arr2 is not indexed in arr1
  arr2.forEach(function(val){
if(arr1.indexOf(val)===-1){
newArr.push(val);
}
});
return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);