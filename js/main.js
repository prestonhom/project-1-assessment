let numberPush = document.querySelector('p.number-push');
let inputBox = document.querySelector('.input-box');
let plusButton = document.querySelector('.plus-button');
let minusButton = document.querySelector('.minus-button');
let newNumber = parseInt(numberPush.innerHTML='0');


plusButton.addEventListener('click',addNumber);
minusButton.addEventListener('click', subtractNumber);

function addNumber(){
    let inputBoxNumber = parseInt(inputBox.value);
    numberPush.innerHTML = newNumber +inputBoxNumber;
    newNumber += inputBoxNumber;
    
}

function subtractNumber(){
    let inputBoxNumber = parseInt(inputBox.value);
    numberPush.innerHTML = newNumber-inputBoxNumber;
    newNumber -= inputBoxNumber;
    
}
