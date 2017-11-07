
/*Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  //replace(/\s/g,"-"), replaces white space with dash,replace(/_/g,"-") replaces underscore with dash
  // replace(/([a-z][A-Z])/g, "$1-$2") looks for small letter followed by capital letter and puts a dash (-) inbetween them 
  
 str = str.replace(/\s/g,"-").replace(/_/g,"-").replace(/([a-z])([A-Z])/g, "$1-$2");
   return str.toLowerCase();
}

spinalCase('This Is Spinal Tap');
