// Elimina el juego con el ID recibido
async function eliminarJuego(id) {

    // Pedimos confirmación antes de borrar
    const confirmar = confirm(`¿Seguro que querés eliminar el juego ID ${id}?`);
    if (!confirmar) return;

    const res = await fetch(`http://localhost:3000/juegos/${id}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        // Si se eliminó, recargamos la tabla para que desaparezca la fila
        alert('Juego eliminado');
        getJuegos();
    } else {
        alert('Error al eliminar el juego');
    }

}