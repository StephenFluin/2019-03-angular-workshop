import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DealsComponent } from './deals/deals.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'deals', component: DealsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
