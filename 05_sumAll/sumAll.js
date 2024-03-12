const sumAll = function(numA, numB) {
    if(typeof numA !== "number" || typeof numB !== "number" || numA < 0 || numB < 0){
        return 'ERROR'
    }
    let min = Math.min(numA,numB);
    let max = Math.max(numA,numB);
    let total = 0;
    for(let i = min; i <= max; i++){
        total += i;
    } 
    return total
};

// Do not edit below this line
module.exports = sumAll;
