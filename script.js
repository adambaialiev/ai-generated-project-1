document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let count = 0;

    document.getElementById('increaseButton').addEventListener('click', function () {
        count++;
        display.textContent = count;
    });
});