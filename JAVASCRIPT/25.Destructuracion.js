//DESTRUCTURANDO OBJETOS
const mascota={
    raza:'Salchicha',
    color:"Pardo",
    edad:3, 
    propietario:"Daniel Gutierrez"
}

var j = JSON.stringify(mascota)
console.log(j)

var objeto = JSON.parse(j)
console.log(objeto)

const mascota2={
    raza:'Salchicha 2',
    color:"Pardo 2",
    edad:5, 
    propietario:"Daniel Gutierrez 2"
}

var{raza,color,edad,propietario}=mascota


console.log(edad)
console.log(propietario)

var{raza,color,edad,propietario}=mascota2

console.log(edad)
console.log(propietario)


var{raza,color,edad,propietario}=mascota


console.log(edad)
console.log(propietario)


//DESTRUCTURANDO ARRAYS 

const camareras=['Juanita','Carla','Michaella','Gabriela']

const[Juanita,Carla,Michaella,Gabriela]=camareras

//console.log(Carla)
