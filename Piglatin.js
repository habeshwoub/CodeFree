//PIG latin
function translatePigLatin(str) {
  var vow = /[aeiou]/gi;
  var ans ='';
  
// Check if the string starts with vowel and if it does add way at the end of the string
 
 if(str[0].match(vow)){
         ans = str + 'way';
       
   } else {
 
     //checking number of consonants before the first vowel
     var x = str.indexOf(str.match(vow)[0]);
     
     ans = str.substr(x)+str.substr(0,x)+'ay';
}
 
  return ans;
}

translatePigLatin("consonant");
