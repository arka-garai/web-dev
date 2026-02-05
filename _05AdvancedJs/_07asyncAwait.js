function fetchUserData(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            reject({ name: "arka", url:"https://arka.com" });
        },3000);
    });
}
//async & await is a way to consume promises
async function getUserData(){
    try{
        console.log("fetching user data...")
        const userData = await fetchUserData();
        console.log("data fetched successfully");
        console.log("user data: ", userData);
    }catch (e) {
        console.log("Error fetching data", e);
    }
}

getUserData();
for (let i = 0; i < 100; i++) {
    console.log(i);
}