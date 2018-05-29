
const  Num=document.getElementById("number"),
       phrase=document.getElementById("ingresoTexto");

    // cipher.encode(Num.value,phrase.value);
    // cipher.decode(Num.value,phrase.value);

      const bCifrado=()=>{ document.getElementById("salidaTexto").innerHTML= cipher.encode(Num.value,phrase.value)}
      document.getElementById("btnCifrado").addEventListener("click",bCifrado);

      const bDescifrado=()=>{ document.getElementById("salidaTexto").innerHTML= cipher.decode(Num.value,phrase.value)}
      document.getElementById("btnDescifrado").addEventListener("click",bDescifrado);

          