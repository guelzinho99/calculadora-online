function calcular(op){
    let n1 = parseFloat(calculadora.n1.value)
    let n2 = parseFloat(calculadora.n2.value)

    switch (op) {
        case "+":
            alert(n1+` + `+n2+` = ${n1+n2}`)
            break;
        case "-":
            alert(n1+` - `+n2+` = ${n1-n2}`)
            break;
        case "x":
            alert(n1+` x `+n2+` = ${n1*n2}`)
            break;
        case "÷":
            alert(n1+` ÷ `+n2+` = ${n1/n2}`)
            break;
        default:
            break;
    }
}