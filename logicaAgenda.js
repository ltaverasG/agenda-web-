







// funcion para mostrar los datos en tabla 
const tabla = document.querySelector('#listadatos tbody');

function cargarDatos() {
    fetch('http://www.raydelto.org/agenda.php')
        .then(respuesta => respuesta.json())
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${usuario.nombre}</td>
                    <td>${usuario.apellido}</td>
                    <td>${usuario.telefono}</td>
                `;
                tabla.appendChild(row)
            });
        })
        .catch(Error => console.log('ha ocurrido un error : ' + Error.message))
}
cargarDatos();
