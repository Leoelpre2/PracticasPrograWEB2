//Paso dos: Creamos el servicio de prodductos, 
// este servicio se encargará de manejar toda la lógica relacionada con 
// los productos, como obtener la lista de productos, agregar un nuevo producto,
//  eliminar un producto, etc.
import {Injectable} from '@angular/core';
import {Producto} from '../models/producto.model';
@Injectable({providedIn: 'root'})
//Esta clase nomas crea los porductos y los envia
export class ProductsService{
    private productos: Producto[] = [
        {
            id: 1,
            nombre: 'Producto 1',
            descripcion: 'Descripción del producto 1',
            precio: 10.99,
            imagenUrl: 'https://via.placeholder.com/150',
            categoria: 'Categoría 1',
            inStack: true
        }
    ];
    getAll(): Producto[]{
        return this.productos;
    }
}