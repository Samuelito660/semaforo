function generateRandomInteger(min , max){
       
    let numero = Math.random()
    numero = numero*(max - min + 1) + min
    let intero = Math.floor(numero)

    return intero
}


function changeRed() {
    start.innerHTML = "CLICCA ORA!";
    setTimeout(luce1.classList.replace("spenta", "rosso"),20);
    setTimeout(luce2.classList.replace("spenta", "rosso"),1500);
    setTimeout(luce3.classList.replace("spenta", "rosso"),1500);
    setTimeout(luce4.classList.replace("spenta", "rosso"),1500);
    
}

function changeGreen(){

    luce1.classList.replace("rosso", "verde");
    luce2.classList.replace("rosso", "verde");
    luce3.classList.replace("rosso", "verde");
    luce4.classList.replace("rosso", "verde");

    wait = true; 
    startTime = Date.now(); 

}


function resetLights() {
    luce1.classList.replace("verde", "spenta");
    luce2.classList.replace("verde", "spenta");
    luce3.classList.replace("verde", "spenta");
    luce3.classList.replace("verde", "spenta");
    luce4.classList.replace("verde", "spenta");
    wait = false; 
    start.disabled = false;
    start.innerHTML = "INIZIA IL TEST!";
}


let start = document.querySelector("#start");
let luce1 = document.querySelector("#luce-1");
let luce2 = document.querySelector("#luce-2");
let luce3 = document.querySelector("#luce-3");
let luce4 = document.querySelector("#luce-4");
let type = document.querySelector("#riflessi");
let typeTime = document.querySelector("#tempo");


let wait = false; 
let startTime;
let bestTime = Infinity; 


start.addEventListener("click", function () {
    if (!wait) {
       
        resetLights(); 
        let delay = generateRandomInteger(1000, 3000); 
        type.innerHTML = "Attenzione...";
        changeRed();
        setTimeout(changeGreen, delay); 
    } 
    else {
        let Riflessi = (Date.now() - startTime) / 1000;
        type.innerHTML = "Tempo di reazione: " + Riflessi + "s"; 
        if (Riflessi < bestTime) {
            bestTime = Riflessi; 
            typeTime.innerHTML = "Record personale: " + bestTime + "s";
        } else {
            typeTime.innerHTML = "Record personale: " + bestTime + "s";
        }
        start.disabled = true; 
        setTimeout(resetLights, 3000); 
    }
});