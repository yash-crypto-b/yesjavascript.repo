function maketea(typeoftea) {
  console.log("making a cup of " + typeoftea);
  console.log("your cup of tea is ready!!");
 return "tea making complete for " + typeoftea;
    
}
let teaorder = maketea("earl grey ");
console.log(teaorder);
function ordertea           (typeoftea) {
    function confirmorder() {
        return 'order confirmed for chai!';


}
 return confirmorder();
}
const calculateOrder = (price, quantity) => {
    return price*quantity;

}
let total = calculateOrder(499,1000);
function maketea(typeoftea){
    return'maketea:${typeoftea}'; 

}
function processTeaOrder(teaFunction) {
 return teaFunction('earl grey');
}
let order = processTeaOrder(maketea);
console.log(order);
   function createTeaMaker(){
    return function (typeoftea){
        return 'making a cup of ${typeoftea}';
    }
   } 
   let teaMaker = createTeaMaker();
   console.log(teaMaker('green tea'));