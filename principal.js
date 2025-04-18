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

    //Parte 2: Métodos de transformación y filtrado
    console.log("4. Obtener solo los nombres con .map():")
    
    const nombreProductos = productos.map(producto => producto.nombre);
    console.log(nombreProductos);

    console.log("5. Filtrar por categoría con .filter():")

    const ropaProductos = productos.filter(producto => producto.categoria ===  "Ropa");
    console.log(ropaProductos )

    console.log("6. Filtrar por precio con .filter():")

    const mayorA = productos.filter(producto => producto.precio > 3000)
    console.log(mayorA)

    console.log("7. Buscar un producto específico con .find():")
    const encontrarObjeto = productos.find(producto => producto.nombre === "Gorra")
    console.log(encontrarObjeto)
    
//Parte 3: Métodos de validación

console.log("8. Verificar con .some():")
const existe = productos.some(producto =>producto.precio > 10000 )
console.log( "Existe algun producto con precio mayor a 10.000?: ", existe)

console.log("9. Verificar con .every():")
const todos = productos.every(producto => producto.precio > 1000)
console.log("Todos los producto cuestan mas de 1000? : ", todos)

console.log("10. Verificar existencia con .includes():")
const incluye = nombreProductos.includes("campera")
console.log("¿El array de nombres contiene 'Campera'? " ,incluye )

// Parte 4:

console.log("11. Ordenar con .sort():")
//Ordená los productos por precio de menor a mayor.
const ordenados = productos.sort((a,b) => a.precio - b.precio);
console.log("Productos ordenados por precio de menor a mayor", ordenados)

console.log("12. Generar mensajes personalizados con .map():")

const mensajes = productos.map(p => 
    `El producto ${p.nombre} cuesta $${p.precio} y pertenece a la categoría ${p.categoria}.`
  );
 console.log(mensajes)



console.log("13. Agregar productos con spread")

const nuevosProductos = [
    { id: 6, nombre: "Bata", precio: 2300, categoria: "Ropa" },
    { id: 7, nombre: "Tacones", precio: 3000, categoria: "Calzado" }
  ];

  const todosLosProductos = [productos, ...nuevosProductos];
console.log("Array combinado :", todosLosProductos);