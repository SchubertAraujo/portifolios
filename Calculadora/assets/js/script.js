function getNumber(value){
    document.getElementById('display').value += value   
}

function getOperation(operator){

    if (operator == 'clear') 
        document.getElementById('display').value = ''
    else if(operator == '=') 
        eval(document.getElementById('display').value)
    else 
        document.getElementById('display').value += operator   


}
