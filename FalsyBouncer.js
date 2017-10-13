/*Bonfire_Falsy bouncer
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Remember to use Read-Search-Ask if you get stuck. Write your own code. */

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var result =[];
  result = arr.filter(removeFalsy);
   return result;
}
function removeFalsy(value){
  return Boolean(value);
}
bouncer([7, "ate", "", false, 9]);