import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.scss']
})
export class ShowErrorComponent implements OnInit, OnDestroy {

  @Input()
  private errors: any;

  @Input()
  private inputName: any;

  errorMessage: string;

  constructor() { }

  ngOnInit(): void {
    console.log('call show error.');
    console.log(this.errors);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes...');
    console.log(changes);

    //  if(changes.errors.previousValue) {
    //    console.log(Object.getOwnPropertyNames (changes.errors.currentValue) , Object.getOwnPropertyNames(changes.errors.previousValue))
    //   if(Object.getOwnPropertyNames (changes.errors.currentValue).join() == Object.getOwnPropertyNames(changes.errors.previousValue).join()) {
    //     console.log('son iguales');
    //   } else {
    //     console.log('son diferentes.');
    //     this.errorMessage =  this.getMessageError(this.errors);
    //   }
    //  } else {
    // }
  
    this.errorMessage = this.getMessageError(this.errors);
  }

  ngOnDestroy() {
  }

  getMessageError(errors) {
    if (errors.required) {
      return `${this.inputName} is required`;
    }
    if (errors.maxlength) {
      return `${this.inputName} max lengh, only ${errors.maxlength.requiredLength}, actual length ${errors.maxlength.actualLength} `;
    }
    if (errors.minlength) {
      return `${this.inputName} min length, min ${errors.minlength.requiredLength}, actual length ${errors.minlength.actualLength} `;
    }
  }

}
