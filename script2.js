function calcular(op){
    let n1 = parseFloat(calculadora.n1.value)

    switch (op) {
        case "√":
            alert(`√`+n1+` = `+(Math.sqrt(n1)))
            break;
        case "!":
            var fat = 1;
            for(i = n1; i > 1; i--){						
                fat *= i;
            }
            alert(n1+`! = `+fat)
            break;
        case "φ":
            var fibo = 1;
                var fib = new Array(n1);
                fib[0] = 0;
                fib[1] = 1;
                for(i=2; i<= n1; i++){
                    fib[i] = fib[i-2] + fib[i-1];
                    fibo += ", "+ fib[i];
                }
                alert(n1+`φ = `+fibo)
            break;
        default:
            break;
    }
}