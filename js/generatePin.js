function getPin() {
    const pin = generatePin();
    const pinStr = pin + '';
    if (pinStr.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = Math.round((Math.random() * 10000));
    return pin;
}

document.getElementById('generate-btn').addEventListener('click', function () {
    pin = getPin();
    const display = document.getElementById('get-pin');
    display.value = pin;
});
