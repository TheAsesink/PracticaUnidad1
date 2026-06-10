import { obtenerUsuarios } from "./api.js";
import { mostrarUsuarios } from "./ui.js";

async function iniciarAplicacion() {

  try {

    const usuarios = await obtenerUsuarios();

    mostrarUsuarios(usuarios);

  } catch (error) {

    console.error(error);

  }

}

const formulario = document.getElementById("studentForm");

formulario.addEventListener("submit", function (e) {

  e.preventDefault();

  const estudiante = {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    edad: document.getElementById("edad").value
  };

  localStorage.setItem(
    "estudiante",
    JSON.stringify(estudiante)
  );

  alert("Estudiante guardado correctamente");

});

iniciarAplicacion();
