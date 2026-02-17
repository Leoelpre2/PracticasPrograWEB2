import { Component } from '@angular/core';
import { ProductoCardComponent } from '../producto-card/producto-card.component.ts/producto-card.component.ts';
import { ProductsService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';
@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductoCardComponent],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
  producto:Producto[] = [];
  constructor(private productsService:ProductsService){
    this.producto = this.productsService.getAll();
  }
}
