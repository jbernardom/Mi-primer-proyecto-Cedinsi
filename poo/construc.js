function Persona(nombre, apellido){
    this.name = nombre;
    this.lastname = apellido
}

Persona.prototype.saludar = function() {
    console.log(`Mi nombre y apellido es  ${this.name}  ${this.lastname}`)
};

const person1 = new Persona('Natalia', 'Beltran');
const person2 = new Persona('Jose', 'Martinez');
person1.saludar();
person2.saludar();
console.log(person1, person2);

function Estudiante(nombre, apellido, curso) {
    Persona.call(this,nombre, apellido);
    this.curso = curso;
}

Estudiante.prototype = Object.create(Persona.prototype);

Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.saludar = function() {
    console.log(`${this.name} ${this.lastname} es  estudiante de Cedinsi ${this.curso} `)
}

const student1 = new Estudiante("Jose", "Novoa", 504)

student1.saludar();