
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var result = [];
  arr.forEach(function(element){
    //push the name and orbital period of every element
    result.push({name:element.name,orbitalPeriod:getOrbitalPeriod(element.avgAlt,GM,earthRadius)});
  });
  return result;
  //function for calulating orbital period of planets
  function getOrbitalPeriod(avgAlt,GM,earthRadius){
    return Math.round(2*Math.PI*(Math.sqrt(Math.pow(earthRadius+avgAlt,3)/GM)));
  }
  
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);







