let users = [
    {
        name: "Emanuel",
        lastName: "Arroyo",
        age: 29
    },
    {
        name: "Luciano",
        lastName: "Firbo",
        age: 23
    },
    {
        name: "Pablo",
        lastName: "Berrettoni -.-",
        age: 23
    }, {
        name: "Pablo",
        lastName: "Escobar",
        age: 29
    }, {
        name: "Yamila",
        lastName: "Correa",
        age: 28
    },
    {
        name: "Yamila",
        lastName: "Vera Lopez",
        age: 22
    },
    {
        name: 'Manuel',
        lastName: 'Salvador',
        age: 22
    },
    {
        name: 'Ricardo',
        lastName: 'Arroyo',
        age: 48
    },
    {
        name: "Emilce",
        lastName: "Espinoza",
        age: 30,
    },
    {
        name: "Maximo",
        lastName: "Arebalo",
        age: 21
    },
    {
        name: "Ignacio",
        lastName: "Mora",
        age: 23
    },
    { name : "Eliana",
    lastName: "Paliza",
    age: 21
       },
]

saludar = () =>{
    users.forEach((user)=>{
     console.log(`Hola mi nombre es ${user.name} ${user.lastName} y tengo ${user.age} años`);
    })
}
saludar()

// Aca hice un for-of que hace exactamente lo mismo que el foreach de arriba, solo queria mostrarlo xD
/* saludar = () =>{
    for (let user of users) {
        console.log(`Hola mi nombre es ${user.name} ${user.lastName} y tengo ${user.age} años`);
    }
}
saludar() */

let hola = "hola";
