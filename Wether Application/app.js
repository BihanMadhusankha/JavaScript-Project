
document.getElementById("searchBtn").addEventListener("click",() =>{
   let searchVal = document.getElementById("searchTxt").value;
    let reop ={
        method:'GET'
    };
    fetch(`http://api.weatherapi.com/v1/current.json?key=17d3cba921e64d1d97a41337241701&q=${searchVal}`,reop)
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
