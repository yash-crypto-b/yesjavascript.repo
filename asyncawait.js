function fetchuserData(){
    return new Promise((resolve,reject  )=>{
       setTimeout(()=>{
        resolve({name:"Yash code", url:"https://yashcode.com/}"})

       },3000) ;
    })
}
async function getUserData() {
    try{
        console.log("Fetching user data.....");
      const userdata =   await fetchuserData()
      console.log("User data",userdata);


    }catch(error){
        console.log("Error fetching data",error );


    }
    
}
getUserData();

