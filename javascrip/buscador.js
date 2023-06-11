"use strict";


function realizarBusqueda(){

	const infoInput = document.getElementById('buscador').value;
	const datos = [
        {
            link: 'https://www.google.com/search?sxsrf=APwXEdfOsbyFPDfp6FepNh_4dR-oasVhjQ:1686369587203&q=tubos+figurados&tbm=isch&source=univ&fir=V4HgbNe1UlkzAM%252C0RnXWpPk7ed5QM%252C_%253BG7QIO278f-kDmM%252CaBGN5kESNoWTYM%252C_%253BfF7egCa89vtzmM%252Cn2TAfV6JYSJhsM%252C_%253BFjbM4uqePtEPmM%252CA1979r6lQkyFQM%252C_%253BhwhaSn2fnLo9ZM%252CiaZznxfqaMaEFM%252C_%253BePrtaBZt555lYM%252CGJ2GWdP796O7nM%252C_%253BCLP9OLPg6xuscM%252CZxyasvScr7OngM%252C_%253Br83iCy365UqEdM%252CkO8VUx-NlsAN8M%252C_%253BdnzmqmO4ETvjVM%252Chl6asZ1NNNO0cM%252C_%253BHwUZt4m-nQ0TAM%252CcCjI964xfaRqSM%252C_&usg=AI4_-kR_Hui-dCB0mnLRS9Ggm6d4w6VMrg&sa=X&ved=2ahUKEwi56dGh6Lf_AhXkRjABHWy8AFgQjJkEegQINhAC&biw=1880&bih=970&dpr=1',
            titulo: 'Tubo figurado'
        },
        {
            link: 'https://www.mundialdetornillos.com/catalogo/racores',
            titulo: 'Racores'
        },
        {
            link: 'https://www.homecenter.com.co/homecenter-co/category/cat1690112/mangueras/',
            titulo: 'Manqueras'
        },
        {
            link: 'https://www.google.com/search?rlz=1C1CHZL_esCO1057CO1057&q=acoples+de+mangueras&tbm=isch&source=univ&fir=PAZi6P2TTivsVM%252CUd55cGI-fE433M%252C_%253BDTRCrZRe224BqM%252CI78DMooT_6tUNM%252C_%253Bzf6TsDzXvBXfjM%252CI78DMooT_6tUNM%252C_%253BW9WdcpJ5ZQQw2M%252CzA7FifH0cKmJ2M%252C_%253BQDZR2EXMj0baZM%252CrqLaJgM-MohEMM%252C_%253BSrl4iVQ8qsjNxM%252C3Tdw3_OX3zqARM%252C_%253BDnl6rdKk1YFy8M%252Cj3f5qBpihxLqrM%252C_%253B4WNa17POckB7OM%252CHUSboz_rzPF0_M%252C_%253BLS3elBtfXkK3pM%252CUd55cGI-fE433M%252C_%253ByzWIpJrDZYO90M%252C9iLHFT3LvhSz6M%252C_&usg=AI4_-kSxFv53nmI8R6l8IIbVrDtslBcUHQ&sa=X&ved=2ahUKEwi-19rYk7r_AhXxnGoFHfswB_EQjJkEegQIGRAC&biw=1366&bih=657&dpr=1',
            titulo: 'Acoples'
        },
        {
            link: 'https://www.c3carecarcenter.com/frenos-bogota/',
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
