
let array = ["2","3","5","7","11","13","17","19"]
function map(arr){
  let newArr = []

	for(let i = 0; i < arr.length; i++){

		console.log(i, arr[i],arr)
		newArr.push(arr[i] = parseFloat(arr[i]))
	}
   return newArr
}
// ["random","array","to","be","mapped"].map(x => mapping(x)) === [mapping("random"),mapping("array"),mapping("to"),mapping("be"),mapping("mapped")]
console.log(map(array))

Array.prototype.map = function(f) {
  return Array.from({length: this.length});
}
console.log(Array.prototype.map)