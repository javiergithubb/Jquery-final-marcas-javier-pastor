$(document).ready(function() {
    function obtenerUsuarios() {
        $.ajax({
            url: 'https://randomuser.me/api/?results=30',
            dataType: 'json',
            success: function(data) {
                mostrarUsuarios(data.results);
            }
        });
    }

    function mostrarUsuarios(usuarios) {
        $('#cartasUsuarios').empty();
        usuarios.forEach(usuario => {
            const cartaUsuario = `
                <div class="user-card">
                    <img src="${usuario.picture.medium}" alt="${usuario.name.first}">
                    <h3>${usuario.name.first} ${usuario.name.last}</h3>
                    <p>${usuario.email}</p>
                </div>
            `;
            $('#cartasUsuarios').append(cartaUsuario);
        });
    }

    obtenerUsuarios();

    $('#buscarInput').on('keyup', function() {
        const textoBusqueda = $(this).val().trim().toLowerCase();

        $('.user-card').each(function() {
            const nombreCompleto = $(this).find('h3').text().trim().toLowerCase();

            if (nombreCompleto.startsWith(textoBusqueda)) {
                $(this).fadeIn();
            } else {
                $(this).fadeOut();
            }
        });
    });
});
