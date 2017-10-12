/*Truncate a string (first argument) if it is longer than 
the given maximum string length (second argument). 
Return the truncated string with a ... ending. 
using string.prototype.slice()*/
function truncateString(str,num){
if(str.length>num && num>3){
 str= str.slice(0,num-3)+'...';//slice starting from 0 index by num-3 indexes
 }
else if(str.length>num && num<=3){
	str = str.slcie(0,num);//slice by num indexes
}
return str;
 }
 truncateString("Woy Xendro Zero Zero",12);//num is 12 then num-3 = 9 then the output should be Woy Xendr...