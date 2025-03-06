// Ejercicio 1.2
const carrito = [
    { nombre: "Monitor", precio: 3500, cantidad: 15 },
    { nombre: "Impresora", precio: 2200, cantidad: 10 },
    { nombre: "Auriculares", precio: 150, cantidad: 25 }
];


let costoTotal = 0;

console.log("Lista de productos carrito:");
carrito.forEach(producto => {
    const totalProducto = producto.precio * producto.cantidad;
    console.log(`${producto.nombre}: ${producto.cantidad} x $${producto.precio} = $${totalProducto}`);
    costoTotal += totalProducto;
});

console.log(`\nCosto total del carrito: $${costoTotal}`);
