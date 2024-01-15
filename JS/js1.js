document.getElementById("submit").onclick=function() {
    
    let username =document.getElementById("username").value;
    let pass =document.getElementById("password").value;
    if(username=="Bihan" && pass=="1234"){
        document.getElementById("pmassage").innerHTML = "Login successfully! "
        document.getElementById("pmassage").style.color="green"
    }
    else{
        document.getElementById("pmassage").innerHTML = "Invalid Login :("
        document.getElementById("pmassage").style.color="red"
    }
    
}