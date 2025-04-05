import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  @Input() product: ProductType;

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: '',
    }
  }

  ngOnInit(): void {

    this.subscription = this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        const id = params['id'];
        this.productService.getProducts()
          .subscribe({
            next: (data) => {
              this.product = data.find(product => product.id === Number(id)) as ProductType;
            }
          })
      }
    });

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
