function signUp() {
    let txtFulllName = document.getElementById("fullname");
    let txtAge = document.getElementById("age");
    let txtNotification = document.getElementById("notification");

    console.log(txtFulllName.value);
    console.log(txtAge.value);

    if(txtFulllName.value== undefined || txtFulllName.value== "") { 
        txtNotification.innerHTML = "Please Enter Full Name";
        return;
    }
    
     if(txtAge.value== undefined || txtAge.value== "") {
        txtNotification.innerHTML = "Please Enter Age";
        return;

    }

    let age = txtAge.value;
    if (age >= 18) {
        txtNotification.innerHTML = "Success Registration";
    }
    else {
        txtNotification.innerHTML = "Invalid Registration";
    }

}

document.getElementById("button").addEventListener("click",signUp);