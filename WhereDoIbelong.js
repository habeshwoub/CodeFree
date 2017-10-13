/*Where do i belong
Return the lowest index at which a value (second argument)
 should be inserted into an array (first argument) 
 once it has been sorted. The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) 
should return 1 because it is greater than 1 (index 0),
 but less than 2 (index 1).Likewise, getIndexToIns([20,3,5], 19)
 should return 2 because once the array has been sorted it will look like [3,5,20]
 and 19 is less than 20 (index 2) and greater than 5 (index 1).*/

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(); //first sort the array in order
  var count=0; //assign variable count to 0 to hold index number
  //loop through the contents of the array
  for(var i=0;i<arr.length;i++) {
       //compare if the contents of the array and the number num
	   //if the number is greater than that of the number in the array index we increment count
	   if(num>(arr[i])){ 
         count++;
       }
    }
  return count;
}                                                                                               
                                                           
getIndexToIns([40, 60], 50);