let massageP=document.getElementById("massage");
let number = Math.floor((Math.random() * 10) + 1);


let rounds = 3;


document.getElementById("btn").onclick = () => {
    let inputNumber = document.getElementById("inputnumber").value;
    let valueElement = document.getElementById("inputnumber");
    valueElement.value="";
    
   
    if (inputNumber !== "") {
        rounds--;
        document.getElementById("ro").innerHTML = rounds;
       
        if(rounds ===0){
            alert("Game Over:)");
            location.reload();
        }

        if (number > inputNumber) {

           massageP.innerHTML = "Think big!"
        } else if (number < inputNumber) {
           massageP.innerHTML="Think small"
        }else{
            alert(massageP.innerHTML="You Win!");
        }
   
    }else{
        alert("Enter Values!");
    }

};



