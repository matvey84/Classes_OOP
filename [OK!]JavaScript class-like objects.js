class Animal {
  constructor(name, type){
		this.name = name;
		this.type = type;
	}

	name(){
		return this.name
	}

	name(name){
    return this.name = name
	}

	toString(){
		return `${this.name} is a ${this.type}`
	}
	type(){
		return this.type
	}
}
var dog = new Animal('Max', 'dog');

console.log(dog.toString())
console.log(dog.type)
console.log(dog.name)
dog.name = ';odh;oai'
console.log(dog.name)