import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormExistsDirective} from "./directives/form-exists.directive";
import {LastNameValidatorDirective} from "./directives/last-name-validator.directive";
import {NameValidatorDirective} from "./directives/name-validator.directive";
import {RouterModule} from "@angular/router";
import { PopupComponent } from './components/popup/popup.component';
import {NgbActiveModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    NameValidatorDirective,
    LastNameValidatorDirective,
    FormExistsDirective,
    PopupComponent
  ],
  exports: [
    NameValidatorDirective,
    LastNameValidatorDirective,
    FormExistsDirective,
    PopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule {
}
