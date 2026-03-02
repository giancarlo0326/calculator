const screen = document.getElementById('screen');

function appendToScreen(value) {
    // Limits screen to 10 characters so it doesn't overflow
    if (screen.value.length < 10) {
        screen.value += value;
    }
}

function clearScreen() {
    screen.value = '';
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        if (screen.value) {
            // Using Function constructor instead of eval for better practice
            const result = new Function('return ' + screen.value)();
            screen.value = Number.isInteger(result) ? result : result.toFixed(2);
        }
    } catch (error) {
        screen.value = "Error";
        setTimeout(clearScreen, 1500);
    }
}