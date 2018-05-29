window.cipher = {

encode : (string, Offset )=> {

  let result = "",code;
  let string =codigo.value;
  let Offset =number.value;

  for (let i=0; i<string.length;i++)
  
  {
          if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90)
          { code = (((string.charCodeAt(i)-65)+Offset)%26)+65;}

          else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122)
          { code = (((string.charCodeAt(i)-97)+Offset)%26)+97;}

          else if (string.charCodeAt(i)===32) 
          { code = 32;}
          result+=String.fromCharCode(code);
  }

  return result;
                },

decode : ( string, Offset)=> {  
  let result = "",code;
  let string =codigo.value;
  let Offset =number.value;
  
  for (let i=0; i<string.length;i++)
    
  {
          if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90)
          { code = (((string.charCodeAt(i)-65)-n+52)%26)+65;}

          else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122)
          { code = (((string.charCodeAt(i)-97)-n+52)%26)+97;}

          else if (string.charCodeAt(i)===32) 
          { code = 32;}
          result+=String.fromCharCode(code);
  }

  return result;
              },  

  /*          

    createCipherWithOffset: (Offset)=>
    {
          return 
          {
            encode: (string)=> 
            {
                  result;
            }
          }
    }

};

