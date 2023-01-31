import { Component } from '@angular/core';

import { Product, products } from '../products';
import { NodeChildComponent } from '../node-child/node-child.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  loadDetails: Map<Product, boolean> = new Map();
  nodeChild = new NodeChildComponent();

  share() {
    this.nodeChild.share();
  }

  loadChildDetails(product: Product) {
    this.loadDetails.set(product, true);
  }

  constructor() {
    for (const product of this.products) {
      this.loadDetails.set(product, false);
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
