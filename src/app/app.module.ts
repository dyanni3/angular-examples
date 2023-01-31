import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NodeDetailsComponent } from './node-details/node-details.component';
import { NodeChildComponent } from './node-child/node-child.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule.forRoot([{ path: '', component: ProductListComponent }]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    NodeDetailsComponent,
    NodeChildComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
