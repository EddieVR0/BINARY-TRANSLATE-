const input = document.getElementById('inputTexto');
const btnConvertir = document.getElementById('btnConvertir');
const btnLimpiar = document.getElementById('btnLimpiar');
const etiquetaResultado = document.getElementById('resultado');

const covertidorBinario = (texto) => {
    const numero = Number(texto);
    
//  por si es numero
    if (!isNaN(numero)) {

        return numero.toString(2).padStart(8, '0');
    } else {
        // Si es una cadena de texto, convierte cada carácter a binario
        return texto.split('').map(function (char) {
            return char.charCodeAt(0).toString(2).padStart(8, '0');
        }).join(' '); // Une con espacios
    }

}

btnConvertir.addEventListener('click', () => {
    const resultado = covertidorBinario(input.value);
    etiquetaResultado.innerText = resultado;
    input.value = '';

});

input.addEventListener('keydown', (event) => {
 if (event.key === 'Enter') {
  btnConvertir.click().btnConvertir(); 

 }
});

btnLimpiar.addEventListener('click', () => {
    input.value = '';
    etiquetaResultado.textContent = '';
});
