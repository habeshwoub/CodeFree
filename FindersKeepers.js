//finders keepers


function findElement(arr, func) {
  var num = 0;
  //create placeholder array
  var hold = [];
  for(var i=0; i<arr.length;i++){
    //assign each element of the array to num value
    num = arr[i];
    //use filter method to return array values divisible by 2 and assign them to hold array
  hold = arr.filter(function(num){
     return num % 2 === 0; 
  });}
  //check if hold array is empty, if empty return undefined else return first element of hold array
  if(hold===[]){
    return undefined;
               }
  else return hold[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });


/* Without using array.prototype.filter method

function findElement(arr, func) {
  var num = 0;
  var ans;
  
  for(var i=0;i<arr.length;i++){
  //assign each element of arr to num value
    num = arr[i];
	//check if it meets criteria of the second argument
     if(func(num)===true){
      //if true return num
	  return num;
     }  else
      {
  ans = undefined;
     }
      } 
  
 return ans;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

*/