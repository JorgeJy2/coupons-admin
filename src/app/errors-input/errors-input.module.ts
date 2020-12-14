import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorComponent } from './components/show-error/show-error.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [ ShowErrorComponent],
  imports: [
    CommonModule,
    MatInputModule
  ], 
  exports: [
    ShowErrorComponent
  ]
})
export class ErrorsInputModule { }
