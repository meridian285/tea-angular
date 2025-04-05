import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {OrderComponent} from "./components/pages/order/order.component";
import {ProductsComponent} from "./components/pages/products/products.component";
import {ProductComponent} from "./components/pages/product/product.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'order', component: OrderComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
