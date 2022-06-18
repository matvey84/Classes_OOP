
var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};
Object.prototype.hash = function(string) {
let examObj = this
let keyArr = string.split('.')
let result;
	for(let key of keyArr){
		if(examObj.hasOwnProperty(key)){
			examObj =  examObj[key]
			result = examObj
		}else {
			return undefined
		}
		
	}
	return result
}
console.log(obj.hash('person.name')); // 'joe'
console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
console.log(obj.hash('person.history.homeStreet')); // undefined
console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined