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
  let Ubicacion = document.getElementById('ubicacion').value

  if (SeleccionRegistro === "si") {
    if (Ubicacion === "caba"){
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
    else if (Ubicacion === 'nacional'){
      if (NumeroDistancia > 0 && NumeroDistancia <= 3){
        ResultadoTarifa.innerText = 700.00
      }
      else if (NumeroDistancia >= 4 && NumeroDistancia <=6){
        ResultadoTarifa.innerText = 779.78
      }
      else if (NumeroDistancia >= 7 && NumeroDistancia <=12){
        ResultadoTarifa.innerText = 839.86
      }
      else if (NumeroDistancia >= 13 && NumeroDistancia <=27){
        ResultadoTarifa.innerText = 899.99
      }
      else {
        ResultadoTarifa.innerText = "Distancia incompatible"
      }
    }
  else if ( Ubicacion === 'provincia'){
    if (NumeroDistancia > 0 && NumeroDistancia <= 3){
      ResultadoTarifa.innerText = 968.57
    }
    else if (NumeroDistancia >= 4 && NumeroDistancia <=6){
      ResultadoTarifa.innerText = 1089.64
    }
    else if (NumeroDistancia >= 7 && NumeroDistancia <=12){
      ResultadoTarifa.innerText = 1210.71
    }
    else if (NumeroDistancia >= 13 && NumeroDistancia <=27){
      ResultadoTarifa.innerText = 1452.85
    }
    else {
      ResultadoTarifa.innerText = "Distancia incompatible"
    }
  }}

//cambiaron los precios en el medio

else  if (SeleccionRegistro === "no"){
  if (Ubicacion === 'caba'){
  if (NumeroDistancia > 0 && NumeroDistancia <= 3){
    ResultadoTarifa.innerText = 1198.45
  }
  else if (NumeroDistancia >= 4 && NumeroDistancia <=6){
    ResultadoTarifa.innerText = 1331.66
  }
  else if (NumeroDistancia >= 7 && NumeroDistancia <=12){
    ResultadoTarifa.innerText = 1434.24
  }
  else if (NumeroDistancia >= 13 && NumeroDistancia <=27){
    ResultadoTarifa.innerText = 1536.91
  }
  else {
    ResultadoTarifa.innerText = "Distancia incompatible"
  }}
  else if (Ubicacion === 'nacional'){
    if (NumeroDistancia > 0 && NumeroDistancia <= 3){
      ResultadoTarifa.innerText = 1428.00
    }
    else if (NumeroDistancia >= 4 && NumeroDistancia <=6){
      ResultadoTarifa.innerText = 1614.14
    }
    else if (NumeroDistancia >= 7 && NumeroDistancia <=12){
      ResultadoTarifa.innerText = 1788.34
    }
    else if (NumeroDistancia >= 13 && NumeroDistancia <=27){
      ResultadoTarifa.innerText = 1967.56
    }
    else {
      ResultadoTarifa.innerText = "Distancia incompatible"
    }
  }
else if ( Ubicacion === 'provincia'){
  if (NumeroDistancia > 0 && NumeroDistancia > 0 && NumeroDistancia <= 3){
    ResultadoTarifa.innerText = 1937.14
  }
  else if (NumeroDistancia >= 4 && NumeroDistancia <=6){
    ResultadoTarifa.innerText = 2179.28
  }
  else if (NumeroDistancia >= 7 && NumeroDistancia <=12){
    ResultadoTarifa.innerText = 2421.42
  }
  else if (NumeroDistancia >= 13 && NumeroDistancia <=27){
    ResultadoTarifa.innerText = 2905.70
  }
  else {
    ResultadoTarifa.innerText = "Distancia incompatible"
  }
}
} 



// esto es de la consigna manija
else  if (SeleccionRegistro === "social"){
  if (Ubicacion === 'caba'){
  if (NumeroDistancia > 0 && NumeroDistancia <= 3){
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
  }}
  else if (Ubicacion === 'nacional'){
    if (NumeroDistancia > 0 && NumeroDistancia <= 3){
      ResultadoTarifa.innerText = 321.30
    }
    else if (NumeroDistancia >= 4 && NumeroDistancia <=6){
      ResultadoTarifa.innerText = 363.18
    }
    else if (NumeroDistancia >= 7 && NumeroDistancia <=12){
      ResultadoTarifa.innerText = 402.37
    }
    else if (NumeroDistancia >= 13 && NumeroDistancia <=27){
      ResultadoTarifa.innerText = 442.70
    }
    else {
      ResultadoTarifa.innerText = "Distancia incompatible"
    }
  }
else if ( Ubicacion === 'provincia'){
  if (NumeroDistancia > 0 && NumeroDistancia <= 3){
    ResultadoTarifa.innerText = 435.85
  }
  else if (NumeroDistancia >= 4 && NumeroDistancia <=6){
    ResultadoTarifa.innerText = 490.33
  }
  else if (NumeroDistancia >= 7 && NumeroDistancia <=12){
    ResultadoTarifa.innerText = 544.81
  }
  else if (NumeroDistancia >= 13 && NumeroDistancia <=27){
    ResultadoTarifa.innerText = 653.78
  }
  else {
    ResultadoTarifa.innerText = "Distancia incompatible"
  }
}
}
})