import {advancedcalculator_backend} from "../../declarations/advancedcalculator_backend";

async function realizarOperacion() {
  const num1 = parseInt(document.getElementById("numero1").value);
  const num2 = parseInt(document.getElementById("numero2").value);
  const operacion = document.getElementById("operacion").value;
  let resultado;

  switch (operacion) {
      case "sumar":
          resultado = await advancedcalculator_backend.sumar(num1, num2);
          break;
      case "restar":
          resultado = await advancedcalculator_backend.restar(num1, num2);
          break;
      case "multiplicar":
          resultado = await advancedcalculator_backend.multiplicar(num1, num2);
          break;
      case "dividir":
          resultado = await advancedcalculator_backend.dividir(num1, num2);
          break;
      case "raizCuadrada":
            resultado = await advancedcalculator_backend.raizCuadrada(num1);
            break;
      case "potencia":
            resultado = await advancedcalculator_backend.potencia(num1, num2);
            break;
      case "logaritmo":
            resultado = await advancedcalculator_backend.logaritmo(num1);
            break;
      case "seno":
            resultado = await advancedcalculator_backend.seno(num1);
            break;
      case "coseno":
            resultado = await advancedcalculator_backend.coseno(num1);
            break;
      case "tangente":
            resultado = await advancedcalculator_backend.tangente(num1);
            break;
    default:
            alert("Operación no reconocida");
            return;
          
  }

  document.getElementById("resultado").innerText = resultado.toString();
}

document.getElementById("buttonId").addEventListener('click',()=>{
      realizarOperacion();
})
