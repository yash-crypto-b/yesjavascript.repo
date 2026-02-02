function Person(name,age){
   this.name = name;
   this.age = age;

}
function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;

}
let myCar = new Car("maruti","wagonR",2014);
console.log(myCar);
let mynewCar = new Car("honda","civic",2026);
console.log(mynewCar);
function Tea(type){
    this.type = type;
    this.describe = function(){
        return' this is a cup of ${this.type} tea';
    }

}
let lemonTea = new Tea("green tea");
console.log(greenTea.describe());
function Animal(species){
    this.species = species;


}
Animal.prototype.sound = function(){
    return 'this ${this.species} makes a sound';

}
let dog = new Animal("dog");
console.log(dog.sound());
function Drink(name){
    if(!new.target){ 
    throw new Error("Drink constructor is not implemented yet");
    }

    this.name = name;
    


}
