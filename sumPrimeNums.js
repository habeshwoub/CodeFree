
function sumPrimes(num) {
  var sum = 0;
  var arr = [2];//initializing first element
  for(var i=3;i<=num;i++){
    if(primeNum(i)===true)
      arr.push(i);      
  }
  
  for(var j=0;j<arr.length;j++){
  //use reduce function to add all elements of the array
  sum = arr.reduce(function(a,b){
    return a+b;
  });  
  }
  //function to check if a number is prime number
  function primeNum(num){
    if(num<2) return false;//if num is <2 return false it's not prime number
    //while i=2 and less than half of the input number, if remainder of its modulo division
	//by i is 0 then it's not prime number e.g. if num=4, 4%2 is not 0 
	for(var i=2;i<=num/2;i++){
      if(num%i===0)
    return false;
  }
  return true;
}
return sum;
}
sumPrimes(10);
