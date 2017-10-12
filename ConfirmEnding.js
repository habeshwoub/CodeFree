/* Confirm ending of a string
Check if a string (first argument, str) 
ends with the given target string (second argument, target). 
use String.prototype.substr()*/

function confirmEnding(str, target){

/*checking through substring 
str.substr(xstr,[length]) returns characters in the string xstr, 
that begin at the specified location,length
*/
if(str.substr((str.length)-(target.length))=== target){
return true;
}else {
return false;
 }
}