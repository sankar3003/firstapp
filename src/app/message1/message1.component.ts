import { Component, OnInit, ViewChildren, QueryList, ViewChild, TemplateRef } from '@angular/core';

export interface messageDirective

{}

@Component({
  selector: 'app-message1',
  templateUrl: './message1.component.html',
  styleUrls: ['./message1.component.scss']
})
export class Message1Component implements OnInit {
  ngOnInit(): void {
    
  }


	@ViewChild('msgTemp')
	private msgTempRef: TemplateRef<any>;


}
