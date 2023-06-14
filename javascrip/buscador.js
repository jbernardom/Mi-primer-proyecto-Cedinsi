"use strict";


function realizarBusqueda(){

	const infoInput = document.getElementById('buscador').value;
	const datos = [
        {
            link: 'http://127.0.0.1:5500/pagina5.html',
            titulo: 'Tubo figurado'
        },
        {
            link: 'https://www.mundialdetornillos.com/catalogo/racores',
            titulo: 'Tornillos'
        },
        {
            link: 'http://127.0.0.1:5500/pagina5.html',
            titulo: 'Mangueras'
        },
        {
            link: 'https://www.google.com/search?rlz=1C1CHZL_esCO1057CO1057&q=acoples+de+mangueras&tbm=isch&source=univ&fir=PAZi6P2TTivsVM%252CUd55cGI-fE433M%252C_%253BDTRCrZRe224BqM%252CI78DMooT_6tUNM%252C_%253Bzf6TsDzXvBXfjM%252CI78DMooT_6tUNM%252C_%253BW9WdcpJ5ZQQw2M%252CzA7FifH0cKmJ2M%252C_%253BQDZR2EXMj0baZM%252CrqLaJgM-MohEMM%252C_%253BSrl4iVQ8qsjNxM%252C3Tdw3_OX3zqARM%252C_%253BDnl6rdKk1YFy8M%252Cj3f5qBpihxLqrM%252C_%253B4WNa17POckB7OM%252CHUSboz_rzPF0_M%252C_%253BLS3elBtfXkK3pM%252CUd55cGI-fE433M%252C_%253ByzWIpJrDZYO90M%252C9iLHFT3LvhSz6M%252C_&usg=AI4_-kSxFv53nmI8R6l8IIbVrDtslBcUHQ&sa=X&ved=2ahUKEwi-19rYk7r_AhXxnGoFHfswB_EQjJkEegQIGRAC&biw=1366&bih=657&dpr=1',
            titulo: 'Acoples'
        },
        {
            link: 'https://www.c3carecarcenter.com/frenos-bogota/',
            titulo: 'Frenos'
        },
        {
            link: 'http://127.0.0.1:5500/pagina5.html',
            titulo: 'Racores'
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
