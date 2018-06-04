
const phrase = document.getElementById("ingresoTexto");
const Num = document.getElementById("number");


const bCifrado = () => { 
  document.getElementById("salidaTexto").innerHTML = cipher.encode(phrase.value, parseInt(Num.value))
 }

 document.getElementById("btnCifrado").addEventListener("click", bCifrado);

const bDescifrado = () => {
   document.getElementById("salidaTexto").innerHTML = cipher.decode(phrase.value, parseInt(Num.value)) 
  }
document.getElementById("btnDescifrado").addEventListener("click", bDescifrado);

