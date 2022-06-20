class File {

	constructor(fullName, content){
    this._count = 0
		this._count2 = 0
		this._fullName = fullName;
		this.content = content;
	}
  
	get fullName(){
		return this._fullName
	}

	get filename(){
		let name = this._fullName
		return name.toString().split('.').reverse().slice(1).reverse().join('.')
	}

	get extension(){
		let extname = this._fullName
		return extname.toString().split('.').pop()

	}

	getContents(){
		let myContent = this.content
    return this.content = this.content.split('\n').join('\n')
  }

	write(value){
    if(!this.content){
			return this.content = `${value}`
		} else {
			return this.content = `${this.content}\n${value}`
		}
		
	}
  
  gets(){
		let content = this.content
    let arr = this.content.includes('\n') ? content.split('\n') : content.split('  ')
		console.log(arr)

		let result = arr[this._count]
		this._count = ++this._count
		return result
	}
	  
  	getc(){
   
		let charr = this.content[this._count2]
		this._count2 = this._count2+1
		return charr;
	}
}


let example = new File("phptester.php", "An example file");
console.log(example.fullName );//"example.txt"
example.fullName = 'kblkbzkvjbz.js'
console.log(example.fullName )
console.log(example.filename );//"example"
example.filename = "goodbye_world"
console.log(example.filename );//"example"
console.log(example.extension );//"txt"
// let myFile = new File("hello.txt", "Hello World\nHello World");
// console.log(myFile.getContents(),'1'); // "Hello World\nHello World"
// console.log(myFile.write('Line1'),'2'); // add 'Line1'
// console.log(myFile.getContents(),'3');//'Line1'

var myFile1 = new File("example.txt", "An example\nfile ggftrj\njhhafafs");
// console.log(myFile1.getContents())
// console.log(myFile1.write('Line1')); // add 'Line1'
// console.log(myFile1.getContents());//'Line1'
// console.log(myFile1.write('Line2')); // add 'Line1'
// myFile1.write("This example file is used as an example test case.");
// console.log(myFile1.getContents());//'Line1'
 console.log(myFile1.gets()); // "Line 1"
 console.log(myFile1.getContents())
// console.log(myFile1.gets()); // "Line 2"
// console.log(myFile1.gets()); // "Line 3"
// console.log(myFile1.gets()); // "Line 4"
// console.log(myFile1.gets()); // "Line 5"
// console.log(myFile1.gets()); // undefined
// console.log(myFile1.gets()); // undefined
// console.log(myFile1.gets()); // undefined
// console.log(myFile1.gets()); // undefined
// console.log(myFile1.gets()); // undefined
// console.log(myFile1.gets()); // undefined
console.log(myFile1.getc()); // "L"
console.log(myFile1.getc()); // "o"
console.log(myFile1.getc()); // "r"
console.log(myFile1.getc()); // "e"
console.log(myFile1.getc()); // "m"
console.log(myFile1.getc()); // " "
console.log(myFile1.getc()); // "i"
console.log(myFile1.getc()); // "p"





