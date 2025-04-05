import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products: ProductType[] = [];
  private productsService: Subscription | null = null

  constructor(private productService: ProductService,
              private router: Router
              ) {}

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(
        {
          next: (data => {
            this.products = data;
          }),
          error: () => {
            this.router.navigate(['/']);
          }
        }
      )
  }

  ngOnDestroy() {
    this.productsService?.unsubscribe();
  }
}
