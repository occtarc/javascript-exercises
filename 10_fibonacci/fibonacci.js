const fibonacci = function(numero) {
    if(numero == 0){
        return 0;
    }
    if(numero == 1){
        return 1;
    }
    if(numero < 0){
        return "OOPS"
    }

    let num = +numero;
    let numA = 0;
    let numB = 1;
    let total = 0;
    for(let i = 1; i < num; i++){
        total = numA + numB;
        numA = numB;
        numB = total;
    }
    return total;
};
// Do not edit below this line
module.exports = fibonacci;
