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
    city : 'Kandy',
    fullName : function(){
        return this.firstName + ' ' + this.lastName
    },

    driving_licence:function(){
        if(this.age>=18){
            return 'Yes, '+this.firstName+' is '+this.age+' years old. so he can drive';
        }
        else{
            return 'No , '+this.firstName+' is '+this.age+' years old. so he can not drive';
        }

    }
}

console.log(Bihan.fullName());

console.log(Bihan.driving_licence());

Bihan.age = 12;

console.log(Bihan.driving_licence());

console.log(Bihan.firstName);

console.log();

let keys =['firstName','lastName','age','city'];

keys.forEach(e =>{
    console.log(`${e}: ${Bihan[e]}`);
})

class person{
    constructor(firstName,lastName,age,city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.city = city;

    }
}

person.prototype.fullName = function(){
    return this.firstName + ' ' + this.lastName
}

let Hasini = new person('Hasini','Chamodi',23,'Meegoda')

console.log(Hasini.fullName());
console.log();

let people = new Array();


people.push('Bihan','Madhusankha','Hasini','Chamodi','Kasun');

console.log(people);

person.prototype.frends = function(){
    return this.firstName + "'s frend are "+ people+".";
}

console.log(Hasini.frends());