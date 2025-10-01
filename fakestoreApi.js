// URL de la API FakeStore
const API_URL = "https://fakestoreapi.com/products";

// ----------------------------------------------------------------------------
// Funciones para cada tipo de petición
// ----------------------------------------------------------------------------

// Función para obtener uno o más productos
export async function obtenerProductos(id = "") {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "GET",
    });
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
}

// Función para crear un producto nuevo
export async function agregarProducto(title, price, category) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
        category,
      }),
    });
    const result = await response.json();
    console.log("Producto creado con éxito:", result);
  } catch (error) {
    console.error("Error al crear el producto:", error);
  }
}

// Función para eliminar un producto
export async function eliminarProducto(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log("Producto eliminado con éxito:", result);
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
  }
}