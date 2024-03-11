// const customer ={
//     name:"saman",
//     age:20
// }

// let table = document.getElementById("table");

// let body = `<tr>
//                 <td>Name</td>
//                 <td>Age</td>
//             </tr>

//             `


// const customers = [
//     {
//         name: "saman",
//         age: 20
//     },

//     {
//         name: "kasun",
//         age: 20
//     },

//     {
//         name: "pawan",
//         age: 20
//     },

//     {
//         name: "ruwan",
//         age: 20
//     }
// ]


// for (let i = 0; i < customers.length; i++) {
//     body += `<tr>
//         <td>${customers[i].name}</td>
//         <td>${customers[i].age}</td>
//     </tr>`
// }
// table.innerHTML = body;

// console.log(customers)
// console.log(customer.name)

// for(var i=0; i<customers.length;i++){
//     console.log(customers[i].name)
//     console.log(customers[i].age)
// }


// customers.forEach(element =>{
//     console.log(element.name);
//     body += `<tr>
//          <td>${element.name}</td>
//          <td>${element.age}</td>
//             </tr>`
// })
// table.innerHTML = body;

let table = document.getElementById('table');

let body = `<tr>
<td>Name</td>
<td>Age</td>
</tr>`

fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        data.forEach(element => {

            body += `
        <tr>
            <td>${element.name.common}</td>
            <td>${element.flag}</td>
        </tr>
        `
        })

        table.innerHTML = body;

    })