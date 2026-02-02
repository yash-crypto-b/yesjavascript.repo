function fetchPostdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Post data fetched...")

        },4000);

    })
}
function  fetchcommentdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve("comment data fetched...");

        },4000);

    })

}
async function getblogdata() {
    try{
        console.log("fetching blog data");
        const blogdata = await fetchPostdata ();
        const commentdata = await fetchcommentdata();
        console.log("fetch complete...");
        return {blogData:blogdata,commentData:commentdata};


    }catch(error){
        console.log("Error fetching blog data..",error);

    }
    
}
getblogdata();
