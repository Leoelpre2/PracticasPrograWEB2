import { Component, Input} from '@angular/core';
import {Producto} from '../models/producto.model';
@Component({
  selector: 'app-producto-card', //Lo que llamemos squi se va a ver en la vista
  standalone: true,
  templateUrl: './producto-card.component.html', //Plantilla 
  styleUrl: './producto-card.component.css',
})
export class ProductoCardComponent {
  @Input() producto!: Producto; //Recibe un producto como entrada
}
