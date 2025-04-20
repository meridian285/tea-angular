import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormExistsDirective} from "./directives/form-exists.directive";
import {LastNameValidatorDirective} from "./directives/last-name-validator.directive";
import {NameValidatorDirective} from "./directives/name-validator.directive";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    NameValidatorDirective,
    LastNameValidatorDirective,
    FormExistsDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule {
}
