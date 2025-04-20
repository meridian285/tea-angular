import {Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  @Input() data: string = '';

  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;

  constructor(private modalService: NgbModal,
              // public activeModal: NgbActiveModal
  ) { }

  open(): void {
    this.modalService.open(this.popup);
  }
}
