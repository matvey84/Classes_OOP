class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}
Object.defineProperties(Person.prototype, {
	name:{
		get(){
			return this.firstName + ' ' +  this.lastName
		},
		set(string){
			console.log(string.split(' ')[0])
			// let arr = string.split(' ')
			this.firstName = string.split(' ')[0];
			this.lastName = string.split(' ')[1];
		}
	}
});
let marcusFenix = new Person('Marcus', 'Fenix');

console.log(marcusFenix.firstName); // => 'Marcus'
console.log(marcusFenix.lastName); // => 'Fenix'
console.log(marcusFenix.getName()); // => 'Marcus Fenix'
console.log('------------------------------------------')
console.log(marcusFenix.name)
console.log(marcusFenix.name = 'August Fenix')
console.log(marcusFenix.name); // => 'Marcus Fenix'