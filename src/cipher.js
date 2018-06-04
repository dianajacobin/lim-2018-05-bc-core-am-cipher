window.cipher = {
  
  encode: (string, offset) => {
    let result = '', code;
        offset = (offset % 26);
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        code = (((string.charCodeAt(i) - 65) + offset) % 26) + 65;
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        code = (((string.charCodeAt(i) - 97) + offset) % 26) + 97;
        } else  {
          code = string.charCodeAt(i);
        } result += String.fromCharCode(code);
    } return result;
  },

  decode: (string, offset) => {
    let result = '', code;
        offset = offset % 26;
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        code = (((string.charCodeAt(i) - 65) - offset + 52) % 26) + 65;
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        code = (((string.charCodeAt(i) - 97) - offset + 52) % 26) + 97;
        } else  {
          code = string.charCodeAt(i);
          } result += String.fromCharCode(code);
    } return result;
  },
};

