function fetchdata(){
return new  Promise ((resolve,reject)=>{})
setTimeout(()=>{
    let success = true;
    if(success){
        resolve("Data fetched successfully      ")

    }else{
        reject("Error in fetching data  ")

    }
},3000);

}
    fetchdata().then((data)=>{}).catch((error)=>{});
    console.log('Promise is resolved')






