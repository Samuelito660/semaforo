function generateRandomInteger(min, max){
       
    let numero = Math.random()
    numero = numero*(max - min + 1) + min
    let intero = Math.floor(numero)

    return intero ;

   
}


