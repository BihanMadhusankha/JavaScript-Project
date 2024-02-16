let inputValue=document.getElementById("email").value;

console.log(document.getElementById("email"))

function validatEmail(){
    if(inputValue=="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"){
        return true;
    }
    else{
        return false;
    }
}
validatEmail()
console.log(validatEmail());