class Cube {
	constructor(length){
		this.length = length;
	}
	get surfaceArea(){
		return (this.length ** 2) * 6
	}

	set surfaceArea(length) {
		let result = Math.sqrt(length/6)
		this.length = result;
	}

  get volume() {
		return this.length ** 3;
	}

  set volume(value) {
		console.log(value)
		let volumeeRes = Math.cbrt(value)
		this.length = Math.round(volumeeRes)
	}
}

var cube = new Cube(3);

console.log("Cube = 3:", cube.length, cube.surfaceArea, cube.volume)
cube.length = 2
console.log('length = 2:', cube.length, cube.surfaceArea, cube.volume)
cube.surfaceArea = 54
console.log('surfaceArea = 54:', cube.length, cube.surfaceArea, cube.volume)
cube.surfaceArea = 96
console.log('surfaceArea = 96:', cube.length, cube.surfaceArea, cube.volume)
cube.volume = 125
console.log('volume = 125:', cube.length, cube.surfaceArea, cube.volume)
cube.volume = 1000
console.log('volume = 1000:', cube.length, cube.surfaceArea, cube.volume)

