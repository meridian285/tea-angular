import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {OrderType} from "../../../types/order.type";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {OrderService} from "../../../services/order.service";


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  public showForm: boolean = false;

  orderForm = this.fb.group({
    name: ['', {
      validators: [Validators.required, Validators.pattern(/^[а-яёА-ЯЁ]+$/)],
      updateOn: 'blur'
    }],
    lastName: ['', {
      validators: [Validators.required, Validators.pattern(/^[а-яёА-ЯЁ]+$/)],
      updateOn: 'blur'
    }],
    phone: ['', {
      validators: [Validators.required, Validators.pattern(/^([+]?[0-9\s)]{11})*$/)],
      updateOn: 'blur'
    }],
    country: ['', {
      validators: [Validators.required],
      updateOn: 'blur'
    }],
    zip: ['', {
      validators: [Validators.required],
      updateOn: 'blur'
    }],
    address: ['', {
      validators: [Validators.required, Validators.pattern(/([а-яёА-ЯЁ0-9\s\-\\])/)],
      updateOn: 'blur'
    }],
    product: [{value: '', disabled: true}],
    comment: [''],
  })

  order: OrderType = {
    name: '',
    last_name: '',
    phone: '',
    country: '',
    zip: '',
    product: '',
    address: '',
    comment: '',
  }

  private subscription: Subscription | null = null;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private fb: FormBuilder,
              private orderService: OrderService
  ) {
  }

  send() {
    this.order = {
      name: String(this.orderForm.value.name),
      last_name: String(this.orderForm.value.lastName),
      phone: String(this.orderForm.value.phone),
      country: String(this.orderForm.value.country),
      zip: String(this.orderForm.value.zip),
      product: String(this.orderForm.value.product),
      address: String(this.orderForm.value.address),
      comment: String(this.orderForm.value.comment),

    }

    this.orderService.createOrder(this.order)
      .subscribe(response => {
        if (response.success) {
          console.log('спасибо за заказ!');
          this.showForm = true;
          this.orderForm.reset();

        } else {
          this.showForm = false;
          console.log('Произошла ошибка. Попробуйте еще раз.');
        }
      });
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.orderForm.patchValue({
          product: params['product'],
        })
      }
    });
  }

  get name() {
    return this.orderForm.get('name');
  }

  get lastName() {
    return this.orderForm.get('lastName');
  }

  get phone() {
    return this.orderForm.get('phone');
  }

  get country() {
    return this.orderForm.get('country');
  }

  get zip() {
    return this.orderForm.get('zip');
  }

  get address() {
    return this.orderForm.get('address');
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
