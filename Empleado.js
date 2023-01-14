class Empleado{
    nombre
    apellido
    edad
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    getName(){
        return this.nombre + " " + this.apellido
    }
}