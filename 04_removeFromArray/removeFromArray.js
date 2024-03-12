const removeFromArray = function(array, ...elems){
    const arraySinDuplicados = [...new Set(array)];
    const arrayCoincidencia = elems.filter((elementos) => arraySinDuplicados.includes(elementos));
    for(let i = 0; i<arrayCoincidencia.length; i++){
        let index = arraySinDuplicados.indexOf(arrayCoincidencia[i]);
        if(index === -1){
            continue;
        }
        arraySinDuplicados.splice(index,1);
    }
    return arraySinDuplicados;    
}

// Do not edit below this line
module.exports = removeFromArray;
