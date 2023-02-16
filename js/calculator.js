document.getElementById('calculator').addEventListener('click', function (event) {
    const char = event.target.innerText;
    const inputField = document.getElementById('input-field');
    if (isNaN(char)) {
        if (char === 'C') {
            inputField.value = '';
        }
        else if (char === '<') {
            let arr = inputField.value.split('');
            arr.pop();
            arr = arr.join('');
            inputField.value = arr;
        }
    }
    else {
        inputField.value = inputField.value + char;
    }
});
let clicked = 3;
document.getElementById('verify-btn').addEventListener('click', function () {
    clicked--;
    if (clicked === 0) {
        document.location.reload();
    }
    else{
        document.getElementById('try-time').innerText = clicked;
    }
    const generatedPin = document.getElementById('get-pin').value;
    const givenPin = document.getElementById('input-field').value;
    const correctDisplay = document.getElementById('correct');
    const wrongDisplay = document.getElementById('wrong');
    if (generatedPin === givenPin) {
        correctDisplay.style.display = 'block';
        wrongDisplay.style.display = 'none';
    }
    else {
        correctDisplay.style.display = 'none';
        wrongDisplay.style.display = 'block';
    }
})