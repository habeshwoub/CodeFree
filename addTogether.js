/*Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5. 
*/
function addTogether(a, b) {
  //pass 2 arguments a and b 
  //check if typeof a is number and if arguments length is one return function that accepts one argument and return the sum
       if (typeof a === "number" && arguments.length === 1) {
        return function(b) {
            return addTogether(a, b);
        };
    } //if type of b is number then return the sum of a and b
  else if (typeof b === "number") {
        return a + b;
    }
}
addTogether(2, 3);