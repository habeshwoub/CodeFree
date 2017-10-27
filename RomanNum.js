//Convert to Roman number

function convertToRoman(num) {
  var numValues = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var ans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var myRoman="";
  //loop through numValues indeces
  for(var i=0;i<numValues.length;i++) {
    //check if the input num is greater or equal to the i index value of numValues array
            while(num>=numValues[i]){
              //while criteria is met add roman number value of the string to myRoman
              myRoman=myRoman +ans[i];
              //subtract the numValues[i] from the input number
              num = num - numValues[i];
                         }
   
 }
  return myRoman;//return roman number
}

convertToRoman(36);
