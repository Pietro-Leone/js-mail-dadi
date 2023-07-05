const randomNum1 = Math.floor(Math.random() * 6) + 1;
const randomNum2 = Math.floor(Math.random() * 6) + 1;

console.log("il numero generato per te è: ", randomNum1);

console.log("il numero generato per il computer è: ", randomNum2);

if (randomNum1 === randomNum2) {
    console.log(`PAREGGIO! ${randomNum1} è uguale a ${randomNum2}`);
    document.getElementById("random").innerHTML = `PAREGGIO! ${randomNum1} è uguale a ${randomNum2}`;
}
else if (randomNum1 > randomNum2) {
    console.log(`YOU WIN! ${randomNum1} è più grande di ${randomNum2}`);
    document.getElementById("random").innerHTML = `YOU WIN! ${randomNum1} è più grande di ${randomNum2}`;
}
else {
    console.log(`YOU LOSE! ${randomNum2} è più grande di ${randomNum1}`);
    document.getElementById("random").innerHTML = `YOU LOSE! ${randomNum2} è più grande di ${randomNum1}`;
}

// BONUS

const inputNumber1 = document.getElementById("InputNumber1");
const inputNumber2 = document.getElementById("InputNumber2");
const inputNumber3 = document.getElementById("InputNumber3");
const btnSubmit = document.getElementById("btn-submit");



btnSubmit.addEventListener("click", function () {
    const number1 = parseInt(inputNumber1.value);
    const number2 = parseInt(inputNumber2.value);
    const number3 = parseInt(inputNumber3.value);

    if (number1 < 1 || number1 > 10 || isNaN(number1) || number2 < 1 || number2 > 10 || isNaN(number2) || number3 < 1 || number3 > 10 || isNaN(number3)) {
        alert("Ricarica la pagina e inserisci dei dati validi");
        location.reload();
    }


    const random1 = Math.floor(Math.random() * 10) + 1;
    const random2 = Math.floor(Math.random() * 10) + 1;
    const random3 = Math.floor(Math.random() * 10) + 1;


    const totNumber = number1 + number2 + number3;
    const totRandom = random1 + random2 + random3;


    if (totNumber === totRandom) {
        console.log(`PAREGGIO! ${totNumber} è uguale a ${totRandom}`);
        document.getElementById("tot-number").innerHTML = `PAREGGIO! ${totNumber} è uguale a ${totRandom}`;
    }
    else if (totNumber > totRandom) {
        console.log(`YOU WIN! ${totNumber} è più grande di ${totRandom}`);
        document.getElementById("tot-number").innerHTML = `YOU WIN! ${totNumber} è più grande di ${totRandom}`;
    }
    else {
        console.log(`YOU LOSE! ${totRandom} è più grande di ${totNumber}`);
        document.getElementById("tot-number").innerHTML = `YOU LOSE! ${totRandom} è più grande di ${totNumber}`;
    }

})