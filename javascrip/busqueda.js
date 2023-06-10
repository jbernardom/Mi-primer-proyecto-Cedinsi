"use strict"

class Buscador {
	constructor(datos){
		this.informacion = datos;
	}

	buscar(busquedaUsuario){
		const resultado = this.informacion.filter(info =>
			info.titulo.toLowerCase().includes(busquedaUsuario.toLowerCase())
		)

		return resultado;
	}
}