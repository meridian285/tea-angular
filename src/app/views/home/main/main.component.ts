import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription, timer} from "rxjs";

declare var $: any;

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  public loading: boolean = false;
  public popupBg: boolean = false;
  private timer: Observable<number> = timer(10000);
  private subscription: Subscription | null = null;

  constructor() {
  }


  ngOnInit() {
    this.subscription = this.timer.subscribe(x => this.popupBg = true);

    $(function () {
      $("#accordion").accordion({
        icons: false,
        heightStyle: "content",
        collapsible: true,
        active: false
      });
    });

    $(document).ready(() => {

// accordion
      $(function () {
        $("#accordion").accordion({
          icons: false,
          heightStyle: "content",
          collapsible: true,
          active: false
        });
      });
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
