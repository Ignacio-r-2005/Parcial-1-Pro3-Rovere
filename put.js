// Rellena el formulario de edición con los datos actuales del juego
function editarJuego(id, nombre, precio, stock) {

    // Ponemos los valores actuales en los inputs para que el usuario los modifique
    document.getElementById('edit-id').value     = id;
    document.getElementById('edit-nombre').value = nombre;
    document.getElementById('edit-precio').value = precio;
    document.getElementById('edit-stock').value  = stock;

    // Mostramos el formulario que estaba oculto
    document.getElementById('form-editar').style.display = 'block';

}

// Manda el PUT con los datos modificados
async function guardarCambios() {

    const id     = document.getElementById('edit-id').value;
    const nombre = document.getElementById('edit-nombre').value;
    const precio = document.getElementById('edit-precio').value;
    const stock  = document.getElementById('edit-stock').value;

    const res = await fetch(`http://localhost:3000/juegos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, precio, stock })
    });

    if (res.ok) {
        // Ocultamos el formulario y recargamos la tabla
        document.getElementById('form-editar').style.display = 'none';
        alert('Juego actualizado');
        getJuegos();
    } else {
        alert('Error al actualizar');
    }

}