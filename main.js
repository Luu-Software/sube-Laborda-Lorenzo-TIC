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
  let ResultadoTarifa = document.getElementById('tarifa').innerText

  if (SeleccionRegistro = "si") {
    if (NumeroDistancia <= 3) {

    }
  }
 
});
