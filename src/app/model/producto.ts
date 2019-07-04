


export class Producto{
    
    codigo:number;
    nombre:string;
    descripcion:string;
    fechaAlta:Date;
    categoria:string;
    precio:number;
    descatalogado:boolean;

    constructor(codigo,nombre,descripcion,fechaAlta,categoria,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaAlta = fechaAlta;
        this.categoria = categoria;
        this.precio = precio;
    }

}