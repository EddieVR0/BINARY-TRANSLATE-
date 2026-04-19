const input = document.getElementById('inputTexto');
const btnConvertir = document.getElementById('btnConvertir');
const btnLimpiar = document.getElementById('btnLimpiar');
const etiquetaResultado = document.getElementById('resultado');

const binarioATexto = (textoBinario) => {
    // Limpia espacios extra
    const limpio = textoBinario.trim();

    // Divide por espacios (cada byte)
    const grupos = limpio.split(' ');

    // Convierte cada grupo binario a carácter
    return grupos.map(bin => {
        const decimal = parseInt(bin, 2);

        // Validación básica
        if (isNaN(decimal)) return '';

        return String.fromCharCode(decimal);
    }).join('');
};

btnConvertir.addEventListener('click', () => {
    const resultado = binarioATexto(input.value);
    etiquetaResultado.innerText = resultado;
    input.value = '';
});

// 🔧 Aquí estaba tu bug en el otro código
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        btnConvertir.click(); // 👈 esto es lo correcto
    }
});

btnLimpiar.addEventListener('click', () => {
    input.value = '';
    etiquetaResultado.textContent = 'Esperando datos...';
});