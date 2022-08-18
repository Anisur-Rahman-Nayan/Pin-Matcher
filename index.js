
function getPin(){
    
    const pin = Math.round(Math.random()* 10000);
    const pinString = pin + ''
    
    if(pinString.length == 4){
        return pin
    }
    else{
        return getPin()
    }
}


function generatePin(){
   const pin = getPin()
   document.getElementById('display-pin').value = pin  
}


document.getElementById('key-pad').addEventListener('click',function(event){
    // console.log(event.target.innerText)
    const number = event.target.innerText;
    const calculatorInput = document.getElementById('typed-numbers')

    if(isNaN(number)){
        if(number =='C')
            calculatorInput.value =''
    }
    else{
      
    const previousNumber = calculatorInput.value
    const newNumber = previousNumber + number
    calculatorInput.value = newNumber
    }
})


function verifyPin(){
    
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value

    const successMessage = document.getElementById('notify-success');

    const failMessage = document.getElementById('notify-fail')

    if(pin == typedNumber){
        
        successMessage.style.display = 'block'
        failMessage.style.display = 'none'
    }
    else{

        failMessage.style.display = 'block'
        successMessage.style.display = 'none'
    }
}
