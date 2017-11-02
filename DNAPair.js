/*DNA pairing The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
*/
function pairElement(str){
//define dna pairs as object
var pairs = {A:'T',T:'A',C:'G',G:'C'};
//use map method to create and return array of the function passed to it
var arr1 = str.split('');
return arr1.map(function (base){
//match the input base with its pair by using pairs object
  return [base,pairs[base]];
});

}
pairElement('GCG');

/*DNA pairing second solution*/ 
function pairElement (str){
	str.toUpperCase();
	str.split(''); //create an array of characterSet
	var placeHolder = [];
	
	for(var i=0;i<str.length;i++)
	{
		switch (str[i]){
			case "G":
			placeHolder.push(["G","C"]);
			break;
			case "C":
			placeHolder.push(["C","G"]);
			break;
			case "A":
			placeHolder.push(["A","T"]);
			break;
			case "T":
			placeHolder.push(["T","A"]);
						
		}
	}
	
	return placeHolder;
}

pairElement('GCG');