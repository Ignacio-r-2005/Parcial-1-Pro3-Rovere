// Toma los datos del formulario y los manda al servidor, Paso 8
async function createJuego() {

    // Leemos los 3 inputs del formulario
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const stock  = document.getElementById('stock').value;

    // Verificamos que ningún campo esté vacío
    if (!nombre || !precio || !stock) {
        alert('Completá todos los campos');
        return;
    }

    // Mandamos el POST con los datos en formato JSON
    const res = await fetch('http://localhost:3000/juegos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, precio, stock })
    });

    const div = document.getElementById('resultado-post');

    if (res.ok) {
        // Si se creó bien, mostramos confirmación
        const nuevo = await res.json();
        div.innerHTML = `<p style="color:green;">Juego "${nuevo.nombre}" creado con ID ${nuevo.id}</p>`;
    } else {
        // Si hubo error, lo mostramos
        div.innerHTML = `<p style="color:red;">Error al crear el juego</p>`;
    } //Termina el paso 8
} 