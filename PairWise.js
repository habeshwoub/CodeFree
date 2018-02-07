/*Pairwise exercise
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. 
Once an element has been used, it cannot be reused to pair with another.
For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. 
We can then write out the array with their indices and values. 
7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6 
*/

function pairwise(arr, arg){
var total = 0;
var checkIndex = [];
	for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[i]+arr[j]===arg && checkIndex.indexOf(i)==-1 && checkIndex.indexOf(j)== -1){
				checkIndex.push(i);
				checkIndex.push(j);
				total +=i+j;
		}
	}
}
return total;
}
pairwise([1,4,2,3,0,5], 7);
pairwise([0, 0, 0, 0, 1, 1], 1);

/*Option  using reduc 2*/
function pairwise(arr, arg){
	return arr.reduce( function (acc,num,index,array){
		for (var i= index+1;i<array.length;i++){
			if(array[index]+array[i]===arg) {
              acc += index +i;
              array[index]= NaN;
              array[i] = NaN;
								}
			}
		return acc;
	},0);
	
}

pairwise([1,4,2,3,0,5], 7);