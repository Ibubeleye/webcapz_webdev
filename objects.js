// Object Literal Methods

// let Car = {
//     name : "Toyota",
//     engineNo : 123456,
//     Image : "https://res.cloudinary.com/v62xcsbx/image/upload/v1789479803/2.png",
//     color : "blue",
//     plateNo : "KDA 123A",
//     ratings : {
//         stars : 5,
//         count : 100 //Nested objects
//     }
// }
// console.log(Car.name); // Using dot notation/Syntax
// console.log(Car.engineNo);
// console.log(Car.Image);


//InstanceOf Object Method

// let Car = new Object();
// Car.image = "https://res.cloudinary.com/v62xcsbx/image/upload/v1789479803/2.png";
// Car.name = "Benz";
// Car.color = "Black";
// Car.engineNo = 12345;

// console.log(Car.name);
// console.log(Car.image);


//Construtor Function Method


function Car(image, name, color, engineNo) {
    this.image = image;
    this.name = name;
    this.color = color;
    this.engineNo = engineNo;
}

let Toyota = new Car("https://res.cloudinary.com/v62xcsbx/image/upload/v1789479803/2.png", "Corolla", )

console.log()