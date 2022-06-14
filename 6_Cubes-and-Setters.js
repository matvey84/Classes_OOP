class Cube {
	constructor(length){
		this.length = length;
	}
	get surfaceArea(){
		return (this.length ** 2) * 6
	}

	set surfaceArea(length) {
		let result = Math.sqrt(length)
		this.length = result;
	}
  // set volume(length) {
	// 	this.length = length;
	// }

  volume() {
		return this.length ** 3;
	}
}

var cube = new Cube(3);

console.log(cube.length, cube.surfaceArea, cube.volume())
cube.surfaceArea = 54