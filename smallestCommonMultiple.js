
'esversion:6'
function smallestCommons(arr) {

  //sort elements of the array in order
arr.sort((a,b)=>a>b?1:-1)
let [div,num] = arr
while(div<arr[1]){
  if(num%div===0){
    div++
  }
  else{
    num += arr[1]
    div = arr[0]
  }
}
return num
}


smallestCommons([1,5]);