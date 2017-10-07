/*reverse a string
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string. */

function reverseString(str) {
  //creating array 
  var myArr = [];
  //Splittingrom the string with split method
   myArr = str.split('');
  //reverse contents of the array using reverse method
  myArr.reverse();
  //join each element of the array using join method into string
  str = myArr.join('');
  return str;
}

reverseString("hello");