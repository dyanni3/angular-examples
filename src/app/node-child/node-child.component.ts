import { Component, Input } from '@angular/core';
import { Product } from '../products';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-node-child',
  templateUrl: './node-child.component.html',
  styleUrls: ['./node-child.component.css'],
})
export class NodeChildComponent {
  @Input() product!: Product;

  share() {
    const alertString = `The product has been shared from node child! ${this.product.description}`;
    window.alert('fifty');
  }
}
