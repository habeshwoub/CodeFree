/*Search and Replace*/

function myReplace(str, before, after) {
  //check if the character at the 0 index of the word before is capitalized 
 if(before.charAt(0)===before.charAt(0).toUpperCase()){
   
   //if capitalized,then Change the word before with the word after, making also the word after start with capital letter
   str = str.replace(before,after.charAt(0).toUpperCase()+after.slice(1));
 }
  str = str.replace(before,after);
  return str;
  
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
