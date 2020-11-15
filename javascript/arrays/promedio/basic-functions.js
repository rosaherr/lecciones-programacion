// Aqui obtenemos el valor de un input
function getValueOfElementById(id) {
    return document.getElementById(id).value
}

function getNumberOfInputById(id) {
    let value =  document.getElementById(id).value;
    return parseFloat(value);
}

function setValueInTagById(value, id) {
    document.getElementById(id).innerHTML = value
}

function cleanInputById(id) {
    document.getElementById(id).value = ""
}