let numbers = document.getElementsByClassName('number')
let result = document.getElementById('result')
let operator = document.getElementsByClassName(`operator`)

let isFirst = true;
let firstNumber,secondNumber;
let operatorValue;

for (let i = 0; i < numbers.length; i++) {
   numbers[i].addEventListener('click', inputHandler)
}

function inputHandler(event) {
      let numberValue = event.target.value;
      
      result.value += numberValue
      if(isFirst){
          firstNumber = parseFloat(result.value)
      }else{
          secondNumber = parseFloat(result.value)
      }
}

function deleteHandler(){
    result.value = '';
    isFirst = true
}
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click' , operation)
 }
 
function operation(event){
    operatorValue = event.target.value
    isFirst = false;
     result.value = '';
}
function finalResult(){
    switch(operatorValue){
        case "+":
            result.value = firstNumber + secondNumber;
        break
        case "-":
            result.value = firstNumber - secondNumber;
        break
        case "*":
            result.value = firstNumber * secondNumber;
        break
        case "/":
            result.value = firstNumber / secondNumber;
        break
        default:
            break
    }
    console.log(result.value);
}






// function dotHandler(){
//     if (result.value.length === 0) {
//         result.value = `0.`;
//     } else if(result.value.indexOf(`.`) == -1) {
//         result.value = `.`;
//     }
// }