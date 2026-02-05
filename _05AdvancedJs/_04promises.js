function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let success = true;
        if(success){
            resolve("Data fetched successfully");
        }else{
            reject("Error fetching data");
        }
        },2000);
    });
}
//consume promise
fetchData()
    .then((data) => {
    return data.toLowerCase();
    }).then((value) => console.log(value))
    .catch((error) => console.log(error));