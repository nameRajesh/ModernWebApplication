class BaseObject {
	width: number = 0;
	length: number = 0;

	constructor() {}

}

class Rectangle extends BaseObject {
	constructor() {
		super();
	}

	calcSize(): number {
		return this.width*this.length;
	}
}

var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());