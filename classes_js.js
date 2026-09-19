//Javascript Classes
class employees{
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}
let Jane = new employees("Jane", 32, "employer");
let David = new employees("David", 19, "employee");
let Mark = new employees("Mark", 45, "CEO");

console.log(Jane.name);
console.log(Mark.position);

console.log(Mark instanceof employees) // Checks if Object is a descendant of the class

for (let key in Jane) {
    console.log(`${key}: ${Jane[key]}`)
}
for (let key in Mark) {
    console.log(`${key}: ${Mark[key]}`)
}
for (let key in David) {
    console.log(`${key}: ${David[key]}`)
}

class Movies extends employees{
    constructor(name, genre, duration){
        super(name);
        this.genre = genre;
        this.duration = duration;
    }
}

let lordOfTheRing = new Movies("Lord Of The Rings", "Action", "2Hr");
console.log(lordOfTheRing.name);
