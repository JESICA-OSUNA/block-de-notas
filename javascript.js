const formulario = document.getElementById('formulario');
        const listado = document.getElementById('listado');
    
        formulario.addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar que se envíe el formulario
    
            const titulo = document.getElementById('titulo').value;
            const contenido = document.getElementById('contenido').value;
    
            if (titulo.trim() === '' || contenido.trim() === '') {
                alert('Debe ingresar un título y contenido');
                return;
            }
    
            const card = document.createElement('div');
            card.className = 'card';
    
            const tituloElement = document.createElement('h3');
            tituloElement.textContent = titulo;
    
            const contenidoElement = document.createElement('p');
            contenidoElement.textContent = contenido;
    
            const estadoButton = document.createElement('button');
            estadoButton.textContent = 'Estado';
            estadoButton.addEventListener('click', function () {
                alert('Estado: Pendiente');
            });
    
            const masInfoButton = document.createElement('button');
            masInfoButton.textContent = 'Más info';
            masInfoButton.addEventListener('click', function () {
                window.location.href = 'https://example.com';
            });
    
            const eliminarButton = document.createElement('button');
            eliminarButton.textContent = 'Eliminar';
            eliminarButton.className = 'btn-danger';
            eliminarButton.addEventListener('click', function () {
                card.remove();
            });
    
            card.appendChild(tituloElement);
            card.appendChild(contenidoElement);
            card.appendChild(estadoButton);
            card.appendChild(masInfoButton);
            card.appendChild(eliminarButton);
    
            listado.appendChild(card);
    
            limpiarFormulario();
        });
    
        function limpiarFormulario() {
            formulario.reset();
        }