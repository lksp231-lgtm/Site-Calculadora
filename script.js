function calcularMedia() {
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);

    let media = (n1 + n2 + n3) / 3;

    document.getElementById("resultado").innerText =
        "A média das notas é: " + media.toFixed(2);
}
