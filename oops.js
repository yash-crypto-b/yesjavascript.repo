let Car = {
    make : "maruti",
    model : "swift",
    year : 2020,
    start: function() {
        return `${this.make}car got started in ${this.year}`;

    }

}
console.log(Car.start());
function Person(name,age){
    this.name = name;
    this.age = age ;


}
let  john = new Person("john",30);
console.log(john.name);
function Animal(type){
    this.type = type;
}
Animal.prototype.sound = function(){
    return `${this.type} makes a sound`;

}
Array.prototype.first = function(){
    return `custom methdod ${this}`;
}
let myArray  = [1,2,3,4,5];
console.log(myArray.first());
let   mynewArray = [6,7,8,9,10];
console.log(mynewArray.first());
class Vehicle{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
    start(){
        return `${this.make}  is a car  of type${this.model} from this ${this.make} `
    }

}
class car extends Vehicle{
    drive(){
        return `${this.make} is driving`;
    }
}
let myCar = new car("honda","sedan");
console.log(myCar.start());
console.log(myCar.drive());
let vehone = new Vehicle("Toyota","SUV");
console.log(vehone.make);
class BankAccount{
    #balance = 0;
    deposit(amount){
        this.#balance +=amount;
        return this.#balance;
    }
    getBalance(){
        return `${this.#balance}`;
    }


}
let account = new BankAccount();
console.log(account.getBalance());
class coffeeMachine{
    start(){
     return `starting the machine `;

    }
    brewcoffee(){
        return`brewing coffee`;

    }
    PressstartButton(){
      let msgone =   this.start();
      let msgtwo =  this.brewcoffee();
      return `${msgone} \n ${msgtwo}`;
    }
}
let myMachine = new coffeeMachine();
console.log(myMachine.PressstartButton());
class Bird{
    fly(){
        return `bird is flying`;    

    }
}
class Penguin extends Bird{
    fly(){
        return `penguins cannot fly`;
    }
}
let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());
//static method 
class calculator{
    static add(a,b){
        return a+b;
    }

}
let minical = new calculator();
//console.log(minical.add(5,10));
let miniCal = new calculator();
console.log(calculator.add(20,30));

//GETTERS AND SETTERS
class Employee{
    constructor(name,salary){
        this.name = name;
        this._salary = salary;
    }

}
let emp = new Employee("Alice",50000);
console.log(emp._salary);



