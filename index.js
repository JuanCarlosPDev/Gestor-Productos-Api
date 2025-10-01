import { agregarProducto, eliminarProducto, obtenerProductos } from "./fakestoreApi.js";

// Constantes
const args = process.argv.slice(2);
const [method, path, ...data] = args;

// ----------------------------------------------------------------------------
// Lógica para ejecutar la función correcta según los argumentos
// ----------------------------------------------------------------------------
const run = () => {
  if (method === "GET" && path === "products") {
    obtenerProductos();
  } else if (method === "GET" && path.includes("products/")) {
    const id = path.split("/")[1];
    obtenerProductos(id);
  } else if (method === "POST" && path === "products") {
    const [title, price, category] = data;
    agregarProducto(title, Number(price), category);
  } else if (method === "DELETE" && path.includes("products/")) {
    const id = path.split("/")[1];
    eliminarProducto(id);
  } else {
    console.log("Comando no reconocido. Revisa la sintaxis.");
  }
};

// Ejecutamos la función principal
run();
