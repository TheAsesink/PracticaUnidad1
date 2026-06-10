export function mostrarUsuarios(usuarios) {

  const contenedor =
    document.getElementById("usuarios");

  contenedor.innerHTML = "";

  usuarios.forEach(usuario => {

    const tarjeta =
      document.createElement("div");

    tarjeta.classList.add("card");

    tarjeta.innerHTML = `
            <h3>${usuario.name}</h3>
            <p><strong>Correo:</strong> ${usuario.email}</p>
            <p><strong>Teléfono:</strong> ${usuario.phone}</p>
            <p><strong>Sitio Web:</strong> ${usuario.website}</p>
        `;

    contenedor.appendChild(tarjeta);

  });
}
