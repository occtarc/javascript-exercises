const palindromes = function (cadena) {
    let alfaNumericos = "abcdefghijklmnñopqrstuvwxyz0123456789"
    let cadenaLimpia = cadena.toLowerCase().split('').filter((caracter) => alfaNumericos.includes(caracter)).join('');
    let cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    return cadenaInvertida === cadenaLimpia;
};

// Do not edit below this line
module.exports = palindromes;
