
// acá debes escuchar eventos del DOM,
// invocar cipher.encode() o cipher.
//decode() según sea necesario y 
//actualizar el resultado en la UI.

let codigo= document.getElementById("ingresoTexto");
let number= document.getElementById("Number");
let result= document.getElementById("salidaTexto");
let botonCifrado= document.getElementById("Cifrado");
let botonDescifrado=document.getElementById("Descifrado");

botonCifrado.addEventListener('click', cipher.encode());
botonDescifrado.addEventListener('click', cipher.decode());