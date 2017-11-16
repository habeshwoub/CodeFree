/* Flatten a nested array. You must account for varying levels of nesting.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
use Array.isArray()*/

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var hold = [];
  //function to flatten passed array
  function flatten(arr){
    //for each item passed to arr lets check if item is not array
    arr.forEach(function (item){
      //if item is not an array push it to hold array
      if(!Array.isArray(item)) {
        hold.push(item);
      } else {
        //push item to flatten function again
        flatten(item);
        
      }
    });
      }
  
  //call function flatten for passed array
  flatten(arr);
  
  return hold;
}

steamrollArray([1, [2], [3, [[4]]]]);