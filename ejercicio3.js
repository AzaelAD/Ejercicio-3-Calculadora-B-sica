function operacion(operacion) {
    const num1 = parseFloat(document.getElementById('operando1').value);
    const num2 = parseFloat(document.getElementById('operando2').value);

    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = 'Error';
    } else {
        switch (operacion) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '/':
                resultado = num2 !== 0 ? num1/num2 : 'Error';
                break;
            case '*':
                resultado = num1 * num2;
                break;
            default:
                resultado = 'Error';
        }
    }

    document.getElementById('resultado').value = resultado;
}

function limpiar() {
    document.getElementById('operando1').value = '00.00';
    document.getElementById('operando2').value = '00.00';
    document.getElementById('resultado').value = '00.00';
}