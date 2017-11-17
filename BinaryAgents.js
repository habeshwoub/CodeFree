/*Binary agent Return an English translated sentence of the passed binary string.
The binary string will be space separated.Here are some helpful links:
String.prototype.charCodeAt()
String.fromCharCode()
*/
function binaryAgent(str) {
  
  var split = [];
      split = str.split(' ');
  var newArray = [];
  var result = [];
  
  for(var i = 0; i < split.length; i++) {
    //parse the binary value to integer value and push it to newArray
    newArray.push(parseInt(split[i], 2));
    //Create a string fromeach char code of the newArray index element and push it to result array 
    result.push(String.fromCharCode(newArray[i]));
    
  }
  //return string using Array.prototype.join() method
  return result.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
