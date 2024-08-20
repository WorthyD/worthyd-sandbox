import { Component } from '@angular/core';
import { MyTestDataService } from '../my-test-data.service';

@Component({
  selector: 'app-my-test-component-3',
  standalone: true,
  imports: [],
  template: '<h1>Component 3 - {{ count }}</h1>',
  styles: [
    `
      :host {
        display: block;
        border: 1px solid black;
        margin: 4px;
      }
    `,
  ],
})
export class MyTestComponent3Component {
  constructor(private myTestDataService: MyTestDataService) {}
  get count() {
    return this.myTestDataService.counter;
  }
}
