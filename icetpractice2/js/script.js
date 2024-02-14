let array = [52,74,36,58,96,32,56,41];

console.log(array);
console.log(array.sort());

function sort(array) {
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i-1;j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
               
            }
        }
    }
    console.log(array);
    return array;
}
sort(array)


const Bihan={
    firstName : 'Bihan',
    lastName : 'Madhusankha',
    age : 22,
    city : 'Kandy'
}
console.log(Bihan.firstName);

console.log();

let keys =['firstName','lastName','age','city'];

keys.forEach(e =>{
    console.log(`${e}: ${Bihan[e]}`);
})