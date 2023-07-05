const randomNum1 = Math.floor(Math.random() * 6) + 1;
const randomNum2 = Math.floor(Math.random() * 6) + 1;

console.log("il numero generato per te è: ", randomNum1);

console.log("il numero generato per il computer è: ", randomNum2);

if (randomNum1 > randomNum2) {
    console.log(`YOU WIN! ${randomNum1} è più grande di ${randomNum2}`);
}
else {
    console.log(`YOU LOSE! ${randomNum2} è più grande di ${randomNum1}`);
}