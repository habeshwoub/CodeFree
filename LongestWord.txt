/*Return the length of the longest word in the provided sentence.

Your response should be a number. */
function findLongestWord(str) {
  var newArr = [];
  newArr= str.split(' ');
  var maxstr = 0;
  for(i=0;i<newArr.length;i++){
    if((newArr[i].length) > maxstr)
    {
      maxstr = newArr[i].length;
    }
  }
      
      return maxstr;
            
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");