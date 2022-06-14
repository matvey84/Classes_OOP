function isSantaClausable(obj) {

	let metodCounter = 0
	let metodArr =  ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney']

	metodArr.forEach((key, i) => {	
  console.log(i, key, obj[key])
	if(Object.prototype.toString.call(obj[key]) === '[object Function]'){
	
	  metodCounter++;	

	} else { 

		metodCounter--;

	} 
})
  return metodCounter === 3 ? true : false
}
var santa = {
	sayHoHoHo: function() { console.log('Ho Ho Ho!') },
	distributeGifts: function() { console.log('Gifts for all!'); },
	goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
	sayHoHoHo: function() { console.log('Oink Oink!') }
	// no distributeGifts() and no goDownTheChimney()
};
console.log(isSantaClausable(santa))
console.log(isSantaClausable(notSanta))