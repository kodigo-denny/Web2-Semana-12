class CalculoSalarioExtra extends CalculoSalario{

    static getSalario(horas, salarioHora){
        if(horas <= 40)
            return super.getSalario(horas, salarioHora)
        else{
            let total = super.getSalario(horas, salarioHora)
            let diferencia = horas - 40
            let extra = diferencia * 5

            return total + extra
        }
    }
}