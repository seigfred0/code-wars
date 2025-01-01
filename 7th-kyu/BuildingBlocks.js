// 7th Kyu

class Block {
    constructor(data) {
        this.width = data[0];
        this.length = data[1];
        this.height = data[2];
    }

    getWidth() {
        return this.width;
    }

    getLength() {
        return this.length;
    }

    getHeight() {
        return this.height
    }

    getVolume() {
        const volume = this.length * this.width * this.height;
        return volume;
    }

    getSurfaceArea() {
        const surfaceArea = 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
        return surfaceArea;
    }
}

const newBlock = new Block([2,4,6]);
console.log(newBlock.getSurfaceArea())



/*

`getWidth()` return the width of the `Block`

`getLength()` return the length of the `Block`

`getHeight()` return the height of the `Block`

`getVolume()` return the volume of the `Block`

`getSurfaceArea()` return the surface area of the `Block`


*/