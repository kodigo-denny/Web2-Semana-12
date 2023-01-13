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

    printTimeSheetReport(){
        console.log("A trabajado 20 horas")
    }
}