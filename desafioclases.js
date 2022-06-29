class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre; 
        this.apellido = apellido;   
        this.libros = libros; 
        this.mascotas = mascotas; 
    }

    getFullName () {
        return `Hola ${this.nombre} ${this.apellido}`
    }

    addMascota(m){
        this.mascotas.push(m)
        return ` ${this.nombre} agregaste una mascota :  ${m}` ;
    }

    countMascotas(){
        return ` ${this.nombre} tienes en total:  ${this.mascotas.length} mascotas `
    }

    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor })
        return`${this.nombre} agregaste ${nombre} de ${autor}`
    }

    getBookNames(){
        return `${this.libros.map( (elemento) =>  elemento.nombre )}` 
    }
}

const Usuario1 = new Usuario (
    "Pepito", 
    "Perez", 
    [ {nombre: 'Cien años de soledad' , autor: 'Gabriel García Márquez' } , 
    { nombre: ' La increíble y triste historia de la cándida Eréndira y su abuela desalmada' , autor: 'Gabriel García Márquez' }], 
    [ 'Canela' , 'Nina' ]
)

console.log(Usuario1.getFullName())
console.log(Usuario1.addMascota('Luca'))
console.log(Usuario1.addBook(' El amor en los tiempos del cólera', 'Gabriel García Márquez'))
console.log(`Hola ${Usuario1.nombre} tus libros son: ${Usuario1.getBookNames()}`)
console.log(`Y ${Usuario1.countMascotas()}`)
