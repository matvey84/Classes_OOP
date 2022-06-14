class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status ) {
		
    super(name, age, status);
		console.log(name, age, status)
		this.name = name;
		this.age = age;
		this.status = status
		this.legs = 0;
		this.species = 'shark';
		
  }
}
var billy = new Shark("Billy", 3, "Alive and well")
console.log(billy.introduce(), billy.name, billy.age, billy.legs, billy.species, billy.status)

class Cat extends Animal {
	constructor(name, age, status ) {
		
    super(name, age, status);
		console.log(name, age, status)
		this.name = name;
		this.age = age;
		this.status = status
		this.legs = 4;
		this.species = 'cat';
  }

	 introduce() {
		super.introduce()
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

let spitsy = new Cat("Spitsy", 6, "sleeping");
console.log(spitsy.introduce(), spitsy.name, spitsy.age, spitsy.legs, spitsy.species, spitsy.status)

class Dog extends Animal {
	constructor(name, age, status,master ) {
		
    super(name, age, status, master);
		console.log(name, age, status)
		this.name = name;
		this.age = age;
		this.status = status
		this.legs = 4;
		this.species = 'dog';
		this.master = master
  }

	greetMaster(){
 return `Hello, ${this.master}`
	}
}
var doug = new Dog("Doug", 12, "Serving his master", "Eliza");
console.log(doug.introduce(), doug.name, doug.age, doug.legs, doug.species, doug.status, doug.greetMaster())