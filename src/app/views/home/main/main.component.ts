import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription, timer} from "rxjs";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";

declare var $: any;

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  public loading: boolean = false;
  public popupBg: boolean = false;
  private timer: Observable<number> = timer(1);
  private subscription: Subscription | null = null;

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    this.subscription = this.timer.subscribe(x => this.popupComponent.open());
    // this.subscription = this.timer.subscribe(x => this.popupBg = true);

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
