class CalculoSalarioExtraRenta extends CalculoSalarioExtra{

    static getSalario(horas, salarioHora){
        let total = super.getSalario(horas, salarioHora)

        return total >= 500 ? total - total*0.1 : total
    }

}