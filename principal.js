const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
    ];

    // Parte 1: Acceso a elementos y recorrido de arrays

    console.log("1. Acceder a propiedades individuales")
    console.log("Nombre del primer producto: " , productos[0].nombre);

    console.log("Recorrido con for...of: ")
    for(const producto of productos){

        console.log("Producto: " , producto.nombre, "- Precio: $", producto.precio )

    }

    console.log("3. Recorrido con .forEach():")

    productos.forEach(producto => {

            console.log("Producto: " , producto.nombre, "- Precio: $", producto.precio)
    })
    