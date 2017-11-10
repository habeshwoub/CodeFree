Array.prototype.last = function (){
return this[this.length-1];
};
Array.prototype.secondToLast = function(){
return this[this.length-2];
};
function sumFibs(num){
var sequence = [1,1];
//if the sum of last two elements of array is less than or equal to num
while(sequence.secondToLast()+ sequence.last()<=num){
sequence.push(sequence.secondToLast()+sequence.last());
}
/*return the value of the filtered array containing only odd fibonaci numbers 
and use reduce to return the sum of last two odd numbers */
return sequence.filter(function(num){
return num%2 !==0;}).reduce(function(a,b){
return a+b;});

}
sumFibs(4);//1,1,2,3.. taking only odds, 1,1,3
/* another way to do this

function sumFibs (num){
	var secondToLast = 0;
	var last =1;
	var result =0;
	while (last <=num){
		//check if last is odd number add it to result
		if(last%2!==0){
			result +=last;
		}
	last += secondToLast;// assign last  as the sum of last and secondToLast
	secondToLast = last -secondToLast;//assign new secondToLast by subtracting from new last the old secondToLast
	}
	return result;
}
sumFibs(4);//1,1,2,3.. taking only odds, 1,1,3
 */
