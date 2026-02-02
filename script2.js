alert('connected');
 let hold = document.getElementById("changeTextButton").addEventListener('click', function() {
    console.log(this)
     let paragraph =document.getElementById
    ("This is my main paragraph:");
    console.log(paragraph);
   paragraph.textContent = "this paragraph has been changed";
   document.getElementById("highlight the first city").addEventListener('click',function(){
    let citiesList = document.getElementById("CitiesList");
     console.log(citiesList.firstElementChild);

   })
 }
)
;
document.getElementById("click mebutton").addEventListener('click',function(){
    alert('yash and his batcave:');

})   
document.getElementById("teaitem").addEventListener('click', function(event) {
    if(event.target && event.target.matches('teaitem')){
      alert("you selected:"+event.target.textContent);

    }
       
    
});
document.getElementById("togglehighlight").addEventListener('click',function(){
    let description = document.getElementById("description");
    description.classList.add("highlight");

})




