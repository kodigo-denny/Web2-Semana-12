class TimeSheetReport{


    static print(empleado, horas, salarioHoras){
        console.log("Reporte de horas trabajadas del empleado: " + empleado.getName())
        console.log("Horas trabajadas: " + horas)
        console.log("Salario: $ " + CalculoSalarioExtraRenta.getSalario(horas, salarioHoras) )
    }
}