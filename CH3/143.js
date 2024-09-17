// Write a Node.js script to create a class person by assigning name & age in form of 
// members. Create one member function named as elder of X which returns elder 
// person object. Details of this elder person should be printed on file as well as on 
// console.

const fs = require("fs");
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    findElder(people){
        if(people.length == 0){
            return null;
        }
        let elder = this;
        for(let i = 0; i < people.length; i++){
            if(elder.age < people[i].age){
                elder = people[i];
            }
        }
        return elder;
    }
}

const people = [
    new Person("Ezio",65),
    new Person("Edward",45),
    new Person("Connor",89),
    new Person("Shay",60)
];

elder = new Person("Bayek",30).findElder(people);
console.log(elder)
fs.writeFileSync("files/elder.txt",`${elder.name} ${elder.age}`);