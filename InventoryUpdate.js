function updateInventory(arr1,arr2){

for(var i=0;i<arr2.length;i++){
	var inventoryExists = arr1.every(function(element){
		return arr2[i][1] !== element[1];
	});
	if(inventoryExists){
		arr1.push(arr2[i]);
	}
	else{
		var indexVal = arr1.findIndex(function(element){
			return element[1] === arr2[i][1];
		});
		arr1[indexVal][0] += arr2[i][0];
	}

}
return arr1.sort(function(a,b){ return a[1]< b[1]? -1:1;});
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
/* option 2
function inventory(arr1, arr2) {

    if (!Array.isArray(arr1)) {
        return [];
    };

    var currentInventory = createObject(arr1);

    arr2.forEach(function(current) {
        if (currentInventory.hasOwnProperty(current[1])) {
            currentInventory[current[1]] += current[0];
        } else {
            currentInventory[current[1]] = current[0];
        }
    });

    // First, we create the array, we then apply sort.
    return createArray(currentInventory).sort(function(a, b) {
        if (a[1] < b[1]) return -1;     // If the first item's name is lesser than the second's, we return -1
        if (a[1] > b[1]) return 1;      // In the opposite case, we return 1
        return 0;                       // This case should not happen in this example, but if they were to be equal, we return 0.
    });
    
    function createObject(array) {
        var obj = {};
        array.forEach(function(current) {
            obj[current[1]] = current[0];
        });
        return obj;
    }

    function createArray(object) {
        var array = [];
        for (var key in object) {
            array.push([object[key], key]);
        }
        return array;
    }
}// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

inventory(curInv, newInv);
*/