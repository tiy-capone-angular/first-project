import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  buttonText;

  constructor() {
    this.buttonText = 'Button App!';
    setTimeout(() => {
      this.buttonText = 'HOORAY!';
    }, 1000);
  }

  handleSomeCoolThing() {
    this.buttonText = 'Clicked';
  }
}
