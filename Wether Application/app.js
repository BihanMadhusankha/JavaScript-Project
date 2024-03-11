
document.getElementById("searchBtn").addEventListener("click",() =>{
   let searchVal = document.getElementById("searchTxt").value;
    let reop ={
        method:'POST'
    };
    fetch(`http://api.weatherapi.com/v1/current.json?key=f1850d9ec02649c4b0a84749240403&q=${searchVal}`,reop)
    .then(response => response.json())
    .then(data =>{
        
        console.log(data);
        document.getElementById("temp").innerHTML = data["current"]["temp_c"]+"C";
        document.getElementById("cloud").innerHTML = data["current"]["condition"]["text"];
        document.getElementById("country").innerHTML = data["location"]["country"];
        document.getElementById("img").src=data["current"]["condition"]["icon"];
    })
    .then(error => console.log("error",error));
});
