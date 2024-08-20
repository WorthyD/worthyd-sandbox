import { Component } from '@angular/core';
import { MyTestDataService } from '../my-test-data.service';
import { MyTestComponent3Component } from './my-test-component-3.component';

@Component({
  selector: 'app-my-test-component-2',
  standalone: true,
  imports: [MyTestComponent3Component],
  providers: [MyTestDataService],
  template: `
    <h1>Component 2 - {{ count }}</h1>
    <button (click)="addToCounter()">Increase</button>
    <app-my-test-component-3></app-my-test-component-3>
  `,
  styles: [
    `
      :host {
        border: 1px solid black;
        margin: 4px;
      }
    `,
  ],
})
export class MyTestComponent2Component {
  constructor(private myTestDataService: MyTestDataService) {}
  get count() {
    return this.myTestDataService.counter;
  }
  addToCounter() {
    this.myTestDataService.increment();
  }
}
