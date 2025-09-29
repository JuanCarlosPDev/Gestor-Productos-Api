// Constantes
const args = process.argv.slice(2);
const [method, path, ...data] = args;

// URL de la API FakeStore
const API_URL = "https://fakestoreapi.com/products";

// ----------------------------------------------------------------------------
// Funciones para cada tipo de petición
// ----------------------------------------------------------------------------

// Función para obtener uno o más productos
async function obtenerProductos(id = "") {
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
async function agregarProducto(title, price, category) {
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
async function eliminarProducto(id) {
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

// ----------------------------------------------------------------------------
// Lógica para ejecutar la función correcta según los argumentos
// ----------------------------------------------------------------------------
const run = () => {
  if (method === "GET" && path === "products") {
    obtenerProductos();
  } else if (method === "GET" && path.startsWith("products/")) {
    const id = path.split("/")[1];
    obtenerProductos(id);
  } else if (method === "POST" && path === "products") {
    const [title, price, category] = data;
    agregarProducto(title, Number(price), category);
  } else if (method === "DELETE" && path.startsWith("products/")) {
    const id = path.split("/")[1];
    eliminarProducto(id);
  } else {
    console.log("Comando no reconocido. Revisa la sintaxis.");
  }
};

// Ejecutamos la función principal
run();
