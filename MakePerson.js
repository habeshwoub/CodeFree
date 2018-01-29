
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
  
  var arr = firstAndLast.split(" ");
  this.getFirstName = function(){
    return arr[0];
  };
  this.getLastName = function(){
      return arr[1];
     };
  this.getFullName = function() {
      return arr[0]+" "+arr[1];
    };
  
     
  this.setFirstName = function(first){
    arr[0] = first;
  };   
  this.setLastName =function(last){
    arr[1] = last;
  };
  this.setFullName = function(firstAndLast) {
    var splitName = firstAndLast.split(" ");
    this.setFirstName(splitName[0]);
    this.setLastName(splitName[1]);
    };
  
};

var bob = new Person('Bob Ross');
bob.getFullName();