// Ejercicio 1.1 de taller 

const productos = {
    nombre: "Asistente virtual para servicios electrodomésticos <<DOGO>>",
    precio: 1350,
    disponible: false
};

// Muestra la información del producto en la consola
console.log("Productos");
console.log(`Nombres: ${productos.nombre}`);
console.log(`Precios: $${productos.precio}`);
console.log(`Disponible: ${productos.disponible ? "Sí" : "No"}`);

// Calcula el precio con un descuento del 10 porciento 
const descuento = 0.1; // 10 porciento 
const precioDescuento = productos.precio - (productos.precio * descuento);
console.log(`Precio con descuento del 10%: Q${precioDescuento.toFixed(2)}`);