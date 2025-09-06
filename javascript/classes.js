class Rectangle {
    constructor(width,height,color){  // constructor is automatically called when we use new with the class name 
        this.width = width;  //this. is a variable that allows you to attach the different properties
        this.height = height;
        this.color = color;
    }
    area(){   //area is a meathod here
        const area = this.width * this.height;
        return area;
    }
    paint(){  //paint is a meathod here too
        console.log(`Painting with color ${this.color}`);
        //(``) lets you embed variables with ${....} .
    
    }
}

const react = new Rectangle(2,4,"red")// instance of a rectangle classs,constructor called (new "class name") 
const area = react.area();            // object of a rectangle class.
react.paint();
 console.log(area)

// some more examples of classes in javaScript

const map = new Map();
map.set('name', 'Avnish Thakur');
map.set('age','20');

const firstName = map.get('name');
console.log(firstName);

//using the Date class
const d = new Date();
console.log(d.getFullYear());
