import {Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  @Input() data: string = '';

  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;

  private modalRef!: NgbModalRef;

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private router: Router) { }

  open(): void {
    this.modalRef = this.modalService.open(this.popup);
  }

  goToProducts(): void {
    if (this.modalRef) {
      this.modalRef.close();
      this.router.navigate(['products']);
    }
  }

  closeModal() {
    this.modalRef.close();
  }
}
