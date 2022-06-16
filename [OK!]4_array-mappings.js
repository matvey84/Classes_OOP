
Array.prototype.myMap = function(cb) {
  let result =[]
	for(let i= 0; i < this.length; i++){
    result.push(cb(this[i], i, this))
	}
	return result
}
console.log(array.myMap((item) => item*2))

