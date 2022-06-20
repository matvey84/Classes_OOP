// Let's make a Cat constructor!
var Cat = (function () {
		let allCatsWeight = 0
		let catsAmount = 0
		let changeWeight = 0
	
	let func = function(name, weight){ //создаем конструстор

		if(!name || !weight){// проверяесм наличие аргументов
			throw Error()
		} else{
			this.name = name;
			this._weight = weight;
		}

		if (this instanceof Cat) catsAmount = catsAmount + 1; // записываем в переменную количество созданнных объектов
		allCatsWeight = allCatsWeight + this._weight;// записываем общий вес созданных котов

		Object.defineProperty(this, "weight", {//создаем акссесоры для класса get/set

				get(){
					return this._weight
				},
				set(number){
					this._weight = number // новое значение для поля weight
					allCatsWeight = (allCatsWeight - weight) + this._weight // меняем общий вес котов удаляя текущий вес кота(weight) и меняем на новый(this._weight)
				}
		});
	}	

  func.averageWeight = function(){ // функция / статическая функция для расчета среднего веса всех котов
	  let result =  allCatsWeight / catsAmount// общий вес делим на количество котов
		return result
	}
  return func // возвращаем результат работы функции
}
 )()

let garfield = new Cat('garfield', 25);
console.log(Cat.averageWeight()); // 25
 
let felix = new Cat('felix', 15);
console.log(Cat.averageWeight(), 'averageWeight до') ;   // now 20

felix.weight // 25


console.log(Cat.averageWeight(), 'averageWeight', felix.weight, garfield.weight,) ;
garfield.weight = 10
console.log(Cat.averageWeight(), 'averageWeight', felix.weight, garfield.weight,) ;

