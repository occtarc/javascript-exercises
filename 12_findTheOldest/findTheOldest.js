const calculateAge = function(person){
    if(!person.yearOfDeath){
        const añoActual = new Date().getFullYear();
        return añoActual - person.yearOfBirth;
    }else{
        return person.yearOfDeath - person.yearOfBirth; 
    }
}

const findTheOldest = function(personas) {
    let oldestPerson = personas[0];
    for (const person of personas) {
        const edad = calculateAge(person);
        const edadMasAntigua = calculateAge(oldestPerson);
        if(edad > edadMasAntigua){
            oldestPerson = person;
        }
    }
    return oldestPerson
};

console.log(findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]).name);



// Do not edit below this line
module.exports = findTheOldest;
