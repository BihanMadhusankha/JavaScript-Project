// basic

/*function wish(){
    console.log("Good luck for the Exam!");
}

function wishStudent(name){

    console.log(name+" Good luck for the Exam!");
    console.log(`${name} Good luck for the Exam!`);
}

wishStudent(10);
wishStudent("Hasini");
wish();*/

 /*question 01

function sum(no1,no2){

    return no1+no2;
}

let addition = sum(10,20);
console.log (addition+sum(30,40));*/

/* question 02

function area(radius){

    return Math.PI*radius*radius;
}

console.log(area(500));*/

/*question 03

function cube(array){

    const answer = [];

    for(let i = 0; i<array.length;i++){

        answer[i]=cubeTheNumber(array[i]);
       
    }
    return answer;
}

function cubeTheNumber(number){
return number*number*number;

}
let arr = [0,1,2,5,10];

console.log(cube(arr))*/

/*question 04*/

var price =[10,20.50,400,1200,660];
var k =20/100;

itemPrice=(value)=>{

    const answer =[];
    let totalBil= 0;

    for(let i =0; i<value.length;i++){

        answer[i]=discount(value[i]);
        totalBil+=answer[i];
        document.
    }

    return totalBil;
}

function discount(buyPrice){

    let discountPrice =buyPrice-(buyPrice*k);
    return discountPrice;
}

console.log("Total Payment : "+itemPrice(price));