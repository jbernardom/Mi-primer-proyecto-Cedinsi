const  informeProductos = [
    {
        producto: `Tubo Figurado`,
        descripcion: `Tubo figurado de acuerdo a la muestra que nos traiga`,
        costo: `$ 300.000`,
        cantidad: 24
    }
    
];

let card = document.getElementById("card") 

for(let i = 0; i < informeProductos.length; i++){
    let titulo = document.createElement("h1");
    titulo.textContent = informeProductos[i].producto;
    card.appendChild(titulo) 

    let descripcion = document.createElement("p");
    descripcion.textContent = informeProductos[i].descripcion;
    card.appendChild(descripcion)

    let costo = document.createElement("span");
    costo.textContent = informeProductos[i].costo;
    card.appendChild(costo)

    let cantidad = document.createElement("p");
    cantidad.textContent = informeProductos[i].cantidad;
    card.appendChild(cantidad)
}

const  informeProductos1 = [
    {
        producto: `Manguera figurada`,
        descripcion: `Manquera figurada de caucho de alta temperatura para vehiculos de trabajo pesado`,
        costo: `$ 80.000`,
        cantidad: 125
    }
    
];

let card1 = document.getElementById("card1") 

for(let i = 0; i < informeProductos1.length; i++){
    let titulo1 = document.createElement("h1");
    titulo1.textContent = informeProductos1[i].producto;
    card1.appendChild(titulo1) 

    let descripcion1 = document.createElement("p");
    descripcion1.textContent = informeProductos1[i].descripcion;
    card1.appendChild(descripcion1)

    let costo1 = document.createElement("span");
    costo1.textContent = informeProductos1[i].costo;
    card1.appendChild(costo1)

    let cantidad1 = document.createElement("p");
    cantidad1.textContent = informeProductos1[i].cantidad;
    card1.appendChild(cantidad1)
}

const  informeProductos2 = [
    {
        producto: `Racores`,
        descripcion: `Racores de todas las medidas en BSP y GIC para todas sus necesidades`,
        costo: `$ 40.000`,
        cantidad: 2495
    }
    
];

let card2 = document.getElementById("card2") 

for(let i = 0; i < informeProductos2.length; i++){
    let titulo2 = document.createElement("h1");
    titulo2.textContent = informeProductos2[i].producto;
    card2.appendChild(titulo2) 

    let descripcion2 = document.createElement("p");
    descripcion2.textContent = informeProductos2[i].descripcion;
    card2.appendChild(descripcion2)

    let costo2 = document.createElement("span");
    costo2.textContent = informeProductos2[i].costo;
    card2.appendChild(costo2)

    let cantidad = document.createElement("p");
    cantidad.textContent = informeProductos2[i].cantidad;
    card2.appendChild(cantidad2)
}



