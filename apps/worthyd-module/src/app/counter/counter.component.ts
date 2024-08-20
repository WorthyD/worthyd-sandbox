import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTestDataService } from './my-test-data.service';
import { MyTestComponentComponent } from './my-counters/my-test-component.component';
import { MyTestComponent2Component } from './my-counters/my-test-component-2.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, MyTestComponentComponent, MyTestComponent2Component],
  template: `
    <main>
      <h1>Global: {{ v }}</h1>
      <div class="my-box">
        <app-my-test-component></app-my-test-component>
        <app-my-test-component-2></app-my-test-component-2>
      </div>
    </main>
  `,
  styles: [
    `
      main {
        max-width: 800px;
        margin: 10rem auto;
      }
      .my-box {
        display: flex;
        > * {
          padding: 2rem;
        }
      }
    `,
  ],
})
export class CounterComponent {
  constructor(private myTestDataService: MyTestDataService) {}
  get v() {
    return this.myTestDataService.counter;
  }
}
