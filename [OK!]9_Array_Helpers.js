var numbers = [1,2,3,4,5];
Array.prototype.square = function(){

  let arr = []
	for(let i = 0; i < this.length; i++ ){
    arr.push(this[i] ** 2)
	}
  return arr
}

Array.prototype.cube = function(){

  let arr = []
	for(let i = 0; i < this.length; i++ ){
    arr.push(this[i] ** 3)
	}
  return arr
}

Array.prototype.average = function(){
  if(!this.length){
		return NaN
  } else {
		let count = 0
		for(let i = 0; i < this.length; i++ ){
		count = count + this[i]
	}
	return count/ this.length
 }
}
Array.prototype.sum = function(){
	try{
    let count = 0;
		for(let i = 0; i < this.length; i++ ){
			count = count + this[i]
		}
			return count;

	}catch (e) {
    throw new Error ('Wrong sum')
	}
}

Array.prototype.even = function(){
	let arr = []
	for(let i = 0; i < this.length; i++ ){
    if(this[i] % 2 === 0){
    arr.push(this[i])
	  }
  }
	return arr
}

Array.prototype.odd = function(){
	let arr = []
	for(let i = 0; i < this.length; i++ ){
    if(this[i] % 2 !== 0){
    arr.push(this[i])
	  }
  }
	return arr
}
console.log(numbers)
console.log(numbers.square(),'square')
console.log(numbers.cube(), 'cube')
console.log(numbers.avarage(), 'avarage')
console.log(numbers.sum(), 'sum')
console.log(numbers.even(),'even')
console.log(numbers.odd(),'odd')
console.log(numbers.even().sum(),'even+sum')
console.log(numbers.even().avarage(),'even+avarage')