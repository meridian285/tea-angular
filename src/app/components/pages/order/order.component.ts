import {Component, OnDestroy, OnInit} from '@angular/core';


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  public showForm: boolean = false;

  constructor() {
  }

  ngOnInit(): void {

  }

 ngOnDestroy() {
 }

  orderForm() {
    return this.showForm;
  }
}
