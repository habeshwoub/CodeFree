/*Chunk Array
Write a function that splits an array (first argument) into groups the length of size 
(second argument) and returns them as a two-dimensional array.
using array.prototype.slice(); and array.prototype.push()*/
function chunkArrayInGroups(arr, size) {
  // Break it up
  var result=[];
  var count =0;
  
  while(count<arr.length){
    result.push(arr.slice(count,count+size));
    count+=size;
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);