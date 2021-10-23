let nota1 = document.getElementById("input1");
let nota2 = document.getElementById("input2");
let nota3 = document.getElementById("input3");
let res = document.getElementById("res");
let notafinal = document.getElementById("nota");
let calc = document.getElementById("calc");
let reset = document.getElementById("reset");
let suma
let sumadecimal
let color
reset.addEventListener("click", function reset() {
    nota1.value = "";
    nota2.value = "";
    nota3.value = "";
    res.value = "";
    suma = ""
    notafinal.textContent = ""
})
calc.addEventListener("click", function sumar() {
    suma = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value)) / 3;
    sumadecimal = suma.toFixed(2)
    res.textContent = sumadecimal
    if (suma < "5") {
        notafinal.value = "Suspenso"
        notafinal.style.background = "red"
    } else
    if ((suma > "4") && (suma < "7")) {
        notafinal.value = "Suficiente"
        notafinal.style.background = "green"
    } else
    if ((suma >= "7") && (suma < "9")) {
        notafinal.value = "Notable"
        notafinal.style.background = "green"
    } else
    if ((suma >= "9") && (suma < "10")) {
        notafinal.value = "Sobresaliente"
        notafinal.style.background = "green"
    }
})