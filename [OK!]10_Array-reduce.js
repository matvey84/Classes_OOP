let array =['a','y','!']

Array.prototype.reduce = function(process, initial=this.shift()) {
	let result = initial	
	for(let i  = 0; i < this.length; i++){
			result = process(result, this[i])
	}
	return result
}

console.log(array.reduce(function(a,b){return a+b}))