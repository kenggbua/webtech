;"use strict";
let test = document.querySelector("fieldset:nth-child(2)");

test.innerHTML += '<label for="price">Price</label><input type="text" disabled required id="price">';

let radios = document.querySelectorAll('input[type="radio"]');

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('input', update)
}
document.getElementById('width').addEventListener('input', update);
document.getElementById('height').addEventListener('input', update);
document.getElementById('color').addEventListener('input', update);

function calculate(width, height, thickness) {

    let color;
    let hex = document.getElementById('color').value;
    let r = hex.slice(1, 3);
    let g = hex.slice(3, 5);
    let b = hex.slice(5, 7);
    if (r === b && b === g) {
        color = 64;
    } else {
        color = 100;
    }

    return (width * height * (thickness / 10)) / color;

}

function update() {

    if (document.querySelector('input[type="radio"]:checked') &&
        document.getElementById('width').value &&
        document.getElementById('height').value) {

        document.getElementById('price').value = calculate(document.getElementById("width").value,
            document.getElementById("height").value,
            document.querySelector('input[type="radio"]:checked').value);
    } else {
        document.getElementById('price').value = '-';
    }
}





