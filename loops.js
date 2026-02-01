let sum = 0;
let i = 1;
while(i<=5){
    sum+=i;
    i++;

}
console.log(sum);
let countdown = [];
let j = 5;
while(j>=0){
    countdown.push(j);
    j--;

}
console.log(countdown);
let teacollection = [];
let tea;

do {
   tea = prompt("Enter your favourite tea type (then use 'stop' to end):");
   if (tea !== "stop") {
       teacollection.push(tea);
   } else {
       console.log('You have stopped entering data');
   }
} while(tea !== "stop");  // ✅ WHILE CONDITION DO KE BAHAAR!

console.log(teacollection);
