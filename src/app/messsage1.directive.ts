import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMesssage1]'
})
export class Messsage1Directive {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
