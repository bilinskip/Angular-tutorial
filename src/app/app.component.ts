import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Lista zadań';

  getFooter(): string {
    return  '© Lista zadań,All rights reserved.';
  }
  
  getDate() : Date {
    return new Date();
  }
}
