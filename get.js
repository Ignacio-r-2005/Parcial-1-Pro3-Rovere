//FUNCIÓN 1: trae todos los productos y llena la tabla, tercer y cuarto paso
async function getJuegos() {

    const res = await fetch('http://localhost:3000/juegos');
    const juegos = await res.json();

    const tbody = document.getElementById('cuerpo-tabla');

    juegos.forEach(juego => {
        // Crea una fila con los 4 campos de cada juegos
        const fila = `
            <tr>
                <td>${juego.id}</td>
                <td>${juego.nombre}</td>
                <td>${juego.precio}</td>
                <td>${juego.stock}</td>
            </tr>
        `;
        tbody.innerHTML += fila;
    });

}  //Termina el paso 3 y 4

//FUNCIÓN 2: busca UN producto según el ID que escribió el usuario, comienza el paso 7
async function buscarJuego() {

    const id = document.getElementById('input-id').value;

    // Si el input está vacío, avisamos y cortamos
    if (!id) {
        alert('Escribí un ID primero');
        return;
    }

    // Llamamos al endpoint /juegos/:id con el ID elegido
    const res = await fetch(`http://localhost:3000/juegos/${id}`);
    const div = document.getElementById('resultado');

    if (res.ok) {
        // Si encontró el juego, mostramos sus datos
        const juego = await res.json();
        div.innerHTML = `
            <p><strong>ID:</strong> ${juego.id}</p>
            <p><strong>Nombre:</strong> ${juego.nombre}</p>
            <p><strong>Precio:</strong> ${juego.precio}</p>
            <p><strong>Stock:</strong> ${juego.stock}</p>
        `;
    } else {
        // Si no existe ese ID, mostramos error en rojo
        div.innerHTML = `<p style="color:red;">No se encontró ningún juego con ID ${id}</p>`;
    }

} //Termina el paso 7

// Llamamos a getjuegos apenas carga la página
getJuegos();