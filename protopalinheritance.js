function Person(name){
    this.name = name ;

}
Person.prototype.greet = function(){
    console.log(`Hello ${this.name}`);

}
let Yash = new Person("Yash");
Yash.greet();
