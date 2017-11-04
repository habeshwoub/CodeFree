//Sorted Union 
function uniteUnique(arr) {
  var placeHolder = [];
  var arIndValue =[];
  //loop through the arguments object using arguments.length to find the number of passed arguments (arrays)
  for (var i=0;i < arguments.length;i++){
    //Check through indexes of each of the arguments 
    for (var j=0;j<arguments[i].length;j++){
       arIndValue = arguments [i][j];
  //check if any of arIndValue is index of placeholder array 
    if(placeHolder.indexOf(arIndValue)<0){
      //if it is unique and does not exist as checked above then add it to placeHolder array
      placeHolder.push(arIndValue);
     }
   }
  }  
  return placeHolder;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);