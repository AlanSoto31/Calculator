let firstOperand = '';
let secondOperand = '';
let operator = '';
let estate = 0;
let result = 0;

//Functions
function add(a, b){
 //return a+b;
 return parseFloat(a+b).toFixed(2);
}

function subtract(a, b){
  //return a-b;
  return parseFloat(a-b).toFixed(2);
}

function multiply(a, b){
  //return a*b;
  return parseFloat(a*b).toFixed(2);
}

function divide(a, b){
  //return a/b;
  return parseFloat(a/b).toFixed(2);
}

function operate(operator, a, b){
  switch(operator){
    case '+':
      result = add(+a, +b);
    break;

    case '-':
      result = subtract(a, b);
    break;

    case '*':
      result = multiply(a, b);
    break;

    case '/':
      result = divide(a, b);
    break;
  }
  return parseFloat(result).toFixed(2);
}

// Logic
// operations of 2 numbers                Operations more than 2 numbers
// E1 = get first number
// E2 = get operator
// E3 = get second number
// E4 = press iqual and show result.
                                         // E4.1 = get second operator and show previus result.
                                         // E5.1 = get third number
                                         // E4.1 = ....
                                         // E5.1 = ....
                                         // E6.1 = press equal anf show result

let displayText = document.getElementById('displayText');

const operandsInput = document.querySelectorAll('.operands');
operandsInput.forEach(b =>  b.addEventListener('click', function(){
  let textToDisplay = document.createTextNode(b.value);
  displayText.appendChild(textToDisplay);
// Estate 1
  if(estate == 0){
    firstOperand = firstOperand + b.value;
    console.log(firstOperand);
    }
//Estate 3
  else if(estate == 1){
    secondOperand = secondOperand + b.value;
    console.log(secondOperand);
    }
// Estate 5.1
  else if(estate == 2){
    displayText.textContent = '';
    displayText.appendChild(textToDisplay);
    secondOperand = secondOperand + b.value;
    estate = 1;
    console.log(secondOperand);
    }

}));

const operatorInput = document.querySelectorAll('.operators');
operatorInput.forEach(c =>  c.addEventListener('click', function(){
displayText.textContent = '';
  let resetColor = document.getElementsByClassName('operators');
  for ( let i=0; i<resetColor.length; i++ ) {
      resetColor[i].style.backgroundColor = "";
  }
  c.style.backgroundColor = 'yellow';
// Estate 2
  if(estate == 0){
    operator = c.value;
    estate = 1;
    return;
  }
// Estate 4.1
  else if(estate == 1 && secondOperand != ''){
    displayText.textContent = '';
    operate(operator, firstOperand, secondOperand);
    let textToDisplay1 = document.createTextNode(result);
    displayText.appendChild(textToDisplay1);
    operator = c.value;
    //Reset states and variables
    firstOperand = result;
    secondOperand = '';
    estate = 2;
    return;
  }
}));
//Estate 4
const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', function(){
  displayText.textContent = '';
  operate(operator, firstOperand, secondOperand);
  let textToDisplay = document.createTextNode(result);
  displayText.appendChild(textToDisplay);
  //Reset states and variables
  firstOperand = result;
  secondOperand = '';
  estate = 0;
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function(){
 displayText.textContent = '';
 let resetColor = document.getElementsByClassName('operators');
 for ( let i=0; i<resetColor.length; i++ ) {
     resetColor[i].style.backgroundColor = "";
 }
//Reset states and variables
 firstOperand = '';
 secondOperand = '';
 estate = 0;
 });
