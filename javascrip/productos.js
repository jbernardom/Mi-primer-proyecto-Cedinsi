const  informeProductos = [
    {
        producto: 'Tubo Figurado',
        descripcion: 'Tubo figurado deacuerdo a la mustra que nos traiga',
        costo: '$ 300.000',
        cantidad: 24
    }
];

let card = document.getElementById("card") 

for(led i = 0; i < informeProductos.length; i++){
    led titulo = document.createElement("h1");
    titulo.textContent = informeProductos[i].titulo;
    card.appendChild(titulo) 
}