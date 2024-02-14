document.getElementById("submit").addEventListener("click", registerStudent);
function registerStudent() {

    let txtFulllName = document.getElementById("studentname").value;
    let txtAge = document.getElementById("studentage").value;
    let textContact = document.getElementById("studentcontactnumber").value;


    document.getElementById("txt-error-name").innerHTML =
        (txtFulllName == undefined || txtFulllName == "" || txtFulllName == null) ?
            "Please Enter Name" : "";


    document.getElementById("txt-error-age").innerHTML =
        (txtAge == undefined || txtAge == "" || txtAge == null) ?
            "Please Enter Age" : "";
            

    document.getElementById("txt-error-contact").innerHTML =
        (textContact == undefined || textContact == "" || textContact == null) ?
            "Please Enter Contact Number" : "";



}