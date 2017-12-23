var assignment = [
{name:'ONE HUNDRED', value:100.00},
{name:'TWENTY', value:20.00},
{name:'TEN', value:10.00},
{name:'FIVE', value:5.00},
{name:'ONE', value:1.00},
{name:'QUARTER', value:0.25},
{name:'DIME', value:0.10},
{name:'NICKEL', value:0.05},
{name:'PENNY', value:0.01}

];
function checkCashRegister(price,cash,cid){
	var change = cash - price;//calculate change
	// we need to store total value of cash register (total money in drawer), using an array, 
	//reduce method on array, arr.reduce(callback[, initialValue]), here we can assign initial value 0.00
	
	var totalCid = cid.reduce(function (acc, next){
	return acc + next [1];},0.0);
	if (totalCid < change){
	return 'Insufficient Funds';
	}
else if (totalCid === change){
	return 'Closed';
}
 //otherwise we need to return the change, with coins and bills in descending order
   cid = cid.reverse();
 var result = assignment.reduce(function (acc,next,index){
	 var currentValue = 0.00;
	 if (change >=next.value){
		 while (change >=next.value && cid[index][1]>=next.value){
			 currentValue += next.value;
			 change -= next.value;
			 change = Math.round(change *100)/100;
			 cid [index][1] -= next.value;
		 }
		 acc.push([next.name,currentValue]);
		 return acc;
		 	 }
		 else {return acc;}
		  }, []);
		  return result.length>0 && change === 0 ? result :'Insufficient Funds';
  
}
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);