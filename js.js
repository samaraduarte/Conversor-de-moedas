var cotacaoDoDolar = 5.32;

function converterParaDolar() {
    var valor = document.getElementById("valor").value;
    valor = valor * cotacaoDoDolar;
    document.getElementById("valorConvertido").value = valor.toFixed(2);
}

function converterParaReal() {
    var valor = document.getElementById("valor").value;
    valor = valor / cotacaoDoDolar;
    document.getElementById("valorConvertido").value = valor.toFixed(2);
}