

function calcular() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operacao = document.getElementById("operacao").value;
    var resultado = null;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operacao){

        case "1" :
            resultado = num1 - num2;
            break;

        case "2" :
            resultado = num1 + num2;
            break;

        case "3" :
            resultado = num1 * num2;
            break;

        case "4" :
            resultado = num1 / num2;
            break;

        default:
            alert("Opção inválida");
            return false;


    }

    document.getElementById("resultado").value = resultado;
}

