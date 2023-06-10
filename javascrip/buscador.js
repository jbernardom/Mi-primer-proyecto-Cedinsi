"use strict";


function realizarBusqueda(){

	const infoInput = document.getElementById('buscador').value;
	const datos = [
        {
            link: 'https://www.google.com/search?sxsrf=APwXEdfOsbyFPDfp6FepNh_4dR-oasVhjQ:1686369587203&q=tubos+figurados&tbm=isch&source=univ&fir=V4HgbNe1UlkzAM%252C0RnXWpPk7ed5QM%252C_%253BG7QIO278f-kDmM%252CaBGN5kESNoWTYM%252C_%253BfF7egCa89vtzmM%252Cn2TAfV6JYSJhsM%252C_%253BFjbM4uqePtEPmM%252CA1979r6lQkyFQM%252C_%253BhwhaSn2fnLo9ZM%252CiaZznxfqaMaEFM%252C_%253BePrtaBZt555lYM%252CGJ2GWdP796O7nM%252C_%253BCLP9OLPg6xuscM%252CZxyasvScr7OngM%252C_%253Br83iCy365UqEdM%252CkO8VUx-NlsAN8M%252C_%253BdnzmqmO4ETvjVM%252Chl6asZ1NNNO0cM%252C_%253BHwUZt4m-nQ0TAM%252CcCjI964xfaRqSM%252C_&usg=AI4_-kR_Hui-dCB0mnLRS9Ggm6d4w6VMrg&sa=X&ved=2ahUKEwi56dGh6Lf_AhXkRjABHWy8AFgQjJkEegQINhAC&biw=1880&bih=970&dpr=1',
            titulo: 'Tubo figurado'
        },
        {
            link: '',
            titulo: 'Racores'
        },
        {
            link: '',
            titulo: 'Manqueras'
        },
        {
            link: '',
            titulo: 'Acoples'
        },
        {
            link: '',
            titulo: 'Frenos'
        }
    ]


    const buscador = new Buscador(datos);
	const resultados = buscador.buscar(infoInput)

    mostrarInformacion(resultados);
}

function mostrarInformacion(informacion){
	const divMostrarInfo = document.getElementById('listadoBusqueda');
	for(let i = 0; i < informacion.length; i++){
		const objeto = informacion[i];
		const link = document.createElement('a');
		link.textContent = objeto.titulo;
		link.href = objeto.link;

		divMostrarInfo.appendChild(link)
	}
}
