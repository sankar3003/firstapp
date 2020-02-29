import { Component, SimpleChanges, Input } from '@angular/core';

import { MyService } from '../my.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { chainedInstruction } from '@angular/compiler/src/render3/view/util';

export interface Hero{

}

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
  providers:  [ MyService ]
})
export class LifeCycleComponent{
  @Input() childMessage: string;
  @Input() hero: Hero;
  @Input() power: string;

person:FormGroup
  name1: string;
  changeLog: any;
  count: number;
  
  

  constructor(
    
    private fb:FormBuilder,
  public service:MyService
  ) {

    
this.person=this.fb.group({
  name:['',Validators.required],
})

   }
   ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
  ngOnInit(): void {
 
  this.service.count.subscribe(res=>{
    this.count=res
  })


    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.logIt();
    
  }
  nextCount() {
    this.service.nextCount();
}

logIt(){
  this.name1='Ram'
  //console.log(this.service.myName);
}



ngDoCheck(): void {

  //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //Add 'implements DoCheck' to the class.
//console.log(this.form.get('name').value)
}


ngAfterContentInit(): void {
  //setTimeout( () => { console.log('contentInit') } );
  
  //Called after ngOnInit when the component's or directive's content has been initialized.
  //Add 'implements AfterContentInit' to the class.

  
}


ngAfterContentChecked(): void {
  
  //Called after every check of the component's or directive's content.
  //Add 'implements AfterContentChecked' to the class.
  
}

ngAfterViewInit(): void {
  //setTimeout( () => { console.warn('sdfdf') } );
  
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  
}

ngAfterViewChecked(){
  
  //Called after every check of the component's view. Applies to components only.
  //Add 'implements AfterViewChecked' to the class.
  
}
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  
}
clickMe(){
console.log('i am click me')
}
}
