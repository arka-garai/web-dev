function fetchPostData (){
    return  new Promise((resolve) => {
        setTimeout(() => {
            resolve("post data fetched");
        },3000);
    });
}
function fetchCommentData (){
    return  new Promise((resolve) => {
        setTimeout(() => {
            resolve("comment data fetched");
        },2000);
    });
}

async function getBlogData(){
    try{
        console.log("fetching blog data...");
        const [postData, commentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData()
            ]);
        console.log(postData);
        console.log(commentData);
        console.log("blog data fetched successfully")
    }catch (e) {
        console.log("Error fetching blog data" , e);
    }
}

getBlogData();