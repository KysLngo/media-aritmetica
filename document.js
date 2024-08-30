document.getElementById('average-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores dos inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);

    // Calcular a média
    const average = (num1 + num2 + num3 + num4) / 4;

    // Exibir o resultado
    document.getElementById('average').innerText = `A média é: ${average.toFixed(2)}`;
});
