import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mode=false;

  parentMessage = "message from parent"
  dark=false;
  isCollapsed = false;
}
