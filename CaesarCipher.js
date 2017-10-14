/*Caesa-s-Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the letters are shifted 
by some set amoun.A common modern use is the ROT13 cipher, where the values of the letters 
are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a 
ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic 
character (i.e. spaces, punctuation), but do pass them on.
using String.prototype.charCodeAt()
*/

function rot13(str){

/*ASCII characters for capital letters A - Z run from(65 -90)
to decipher A with code 65, we add 13 to its ASCII and will be ASCII 78 (character code of N)
but for characters N-Z ( ASCII 78 to 90) we need to subtract 13 instead of adding  */

var newString = []; //to hold the decoded string

//Deciphering message by looping through contents of string

for (var i=0;i<str.length;i++){
//Check if the character is non-alphabetic, character code <65 or >90
if(str.charCodeAt(i)<65 || str.charCodeAt(i)>90){
 newString.push(str.charAt(i));//use String.prototype.charAt()
 }
 //check if the charcter is between ASCII 78 to 90
 else if(str.charCodeAt(i)>77){
 newString.push(String.fromCharCode(str.charCodeAt(i)- 13));
 }
else{
 newString.push(String.fromCharCode(str.charCodeAt(i)+ 13));//if the character is between ASCII 65 and 77 (A-M) add 13 steps
 }
}
return newString.join("");
}
//testing
rot13("SERR PBQR PNZC"); // should decode to "FREE CODE CAMP"