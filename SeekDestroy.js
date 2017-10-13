/* Seek and Destroy You will be provided with an initial array 
(the first argument in the destroyer function), 
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.*/
function destroyer(arr){
var tobeRemoved =[];
var result =[];
for (var i=0;i<arguments.length;i++){
tobeRemoved.push(arguments[i]);//storing argument values we want to compare and remove
}
//looping through the array to chek if the arguments are included
 for (var j=0;j<arr.length;j++) {
//if contents of tobeRemoved are not in contents of the array arr
   if(tobeRemoved.indexOf(arr[j])===-1){
   result.push(arr[j]);
   }
   
 }
return  result;


}