import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTestDataService } from '../my-test-data.service';

@Component({
  selector: 'app-my-test-component',
  standalone: true,
  imports: [CommonModule],
  //providers: [MyTestDataService],
  template: `
    <h1>Component 1 - {{ count }}</h1>
    <button (click)="addToCounter()">Increase</button>
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
export class MyTestComponentComponent {
  constructor(private myTestDataService: MyTestDataService) {}
  get count() {
    return this.myTestDataService.counter;
  }
  addToCounter() {
    this.myTestDataService.increment();
  }
}
