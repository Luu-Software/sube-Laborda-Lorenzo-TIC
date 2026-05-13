/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  let SeleccionRegistro = document.getElementById('registrada').value;
  let NumeroDistancia =  document.getElementById('distancia').value;
  let ResultadoTarifa = document.getElementById('tarifa');

  if (SeleccionRegistro === "si") {
    if (NumeroDistancia > 0 && NumeroDistancia <= 3){
      ResultadoTarifa.innerText = 715.24
    }
    else if (NumeroDistancia >= 4 && NumeroDistancia <=6){
      ResultadoTarifa.innerText = 794.74
    }
    else if (NumeroDistancia >= 7 && NumeroDistancia <=12){
      ResultadoTarifa.innerText = 855.97
    }
    else if (NumeroDistancia >= 13 && NumeroDistancia <=27){
      ResultadoTarifa.innerText = 917.24
    }
    else {
      ResultadoTarifa.innerText = "Distancia incompatible"
    }
}
else  if (SeleccionRegistro === "no"){
  if (NumeroDistancia <= 3){
    ResultadoTarifa.innerText = 1137.23
  }
  else if (NumeroDistancia >= 4 && NumeroDistancia <=6){
    ResultadoTarifa.innerText = 1263.64
  }
  else if (NumeroDistancia >= 7 && NumeroDistancia <=12){
    ResultadoTarifa.innerText = 1360.99
  }
  else if (NumeroDistancia >= 13 && NumeroDistancia <=27){
    ResultadoTarifa.innerText = 1458.41
  }
  else {
    ResultadoTarifa.innerText = "Distancia incompatible"
  }
} 
  // a partir de aca es de la consigna manija
else if (SeleccionRegistro === "social") {
  if (NumeroDistancia <= 3){
      ResultadoTarifa.innerText = 339.18
    }
  else if (NumeroDistancia >= 4 && NumeroDistancia <=6){
      ResultadoTarifa.innerText = 376.88
    }
  else if (NumeroDistancia >= 7 && NumeroDistancia <=12){
      ResultadoTarifa.innerText = 405.91
    }
  else if (NumeroDistancia >= 13 && NumeroDistancia <=27){
      ResultadoTarifa.innerText = 434.97
    }
  else {
      ResultadoTarifa.innerText = "Distancia incompatible"
    }
  }
});
