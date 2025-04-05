import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { MainComponent } from './components/pages/main/main.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { OrderComponent } from './components/pages/order/order.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ProductComponent } from './components/pages/product/product.component';
import { HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NameValidatorDirective } from './directives/name-validator.directive';
import { LastNameValidatorDirective } from './directives/last-name-validator.directive';
import { FormExistsDirective } from './directives/form-exists.directive';
import {OrderFormComponent} from "./components/pages/order/order-form/order-form.component";
import {OrderSuccessComponent} from "./components/pages/order/order-success/order-success.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    OrderComponent,
    ProductsComponent,
    ProductComponent,
    NameValidatorDirective,
    LastNameValidatorDirective,
    FormExistsDirective,
    OrderFormComponent,
    OrderSuccessComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
