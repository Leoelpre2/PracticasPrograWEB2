
//Paso numero uno, creamos el modelo del producto, es decir, 
// la estructura de datos que va a tener cada producto en nuestra aplicación. 
// Esto nos ayudará a mantener nuestro código organizado y a evitar errores al manipular los datos de los productos.
export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
  categoria: string;
  inStack: boolean;

}