const fs = requiere("fs");

class Contenedor {
    constructor (archivo) {
        this.archivo = archivo;
    }

    save (producto){
        try{
            const leerArchivo = fs.readFile(this.archivo, "utf-8"); 
            
            producto.id = leerArchivo[leerArchivo.find(item => item.id == producto.id )].id + 1;    

        } 

        catch (error) {
            console.log("Hubo un error", error); 
        }
    }

    getById(){

    }

    getAll(){

    }

    deleteById(){

    }

    deleteAll(){

    }

}
