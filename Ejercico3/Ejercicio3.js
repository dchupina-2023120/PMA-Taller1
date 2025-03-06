// Definimos el inventario con artículos
const inventario = [
    { id: 1, nombre: "Tablet", precio: 4200, stock: 8 },
    { id: 2, nombre: "Router WiFi", precio: 120, stock: 15 },
    { id: 3, nombre: "Escritorio", precio: 3200, stock: 5 }
];

// Función para mostrar los productos disponibles
function mostrarInventario() {
    console.log("\nArtículos en inventario:");
    inventario.forEach(articulo => {
        console.log(`ID: ${articulo.id}, Producto: ${articulo.nombre}, Costo: $${articulo.precio}, Disponibles: ${articulo.stock}`);
    });
}

// Función para localizar un artículo por su ID
function encontrarProducto(id) {
    const articulo = inventario.find(item => item.id === id);
    if (articulo) {
        console.log(`\nDetalles del producto: ${articulo.nombre}, Valor: $${articulo.precio}, Existencias: ${articulo.stock}`);
    } else {
        console.log("\nNo se halló el artículo solicitado.");
    }
}

// Función para procesar una compra
function realizarCompra(id, cantidad) {
    const articulo = inventario.find(item => item.id === id);
    
    if (!articulo) {
        console.log("\nError: El artículo no está en inventario.");
        return;
    }

    if (articulo.stock >= cantidad) {
        articulo.stock -= cantidad;
        const totalPago = cantidad * articulo.precio;
        console.log(`\nCompra realizada: ${cantidad} x ${articulo.nombre} por un monto de: $${totalPago}`);
        console.log(`Unidades restantes de ${articulo.nombre}: ${articulo.stock}`);
    } else {
        console.log(`\nError: Existencias insuficientes de ${articulo.nombre}. Cantidad disponible: ${articulo.stock}`);
    }
}

// Función para calcular el costo total del inventario
function calcularCostoTotal() {
    let totalInventario = inventario.reduce((suma, item) => suma + (item.precio * item.stock), 0);
    console.log(`\nValor acumulado del inventario: $${totalInventario}`);
}

// Ejecución de funciones
mostrarInventario();
encontrarProducto(2);
realizarCompra(2, 4);
calcularCostoTotal();
