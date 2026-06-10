export async function obtenerUsuarios() {
  try {

    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!respuesta.ok) {
      throw new Error("Error al obtener usuarios");
    }

    return await respuesta.json();

  } catch (error) {

    console.error("Error:", error);
    return [];

  }
}
