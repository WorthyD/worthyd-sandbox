import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTestComponent2Component } from '../my-test-component-2/my-test-component-2.component';
import { MyTestComponentComponent } from '../my-test-component/my-test-component.component';
import { MyTestDataService } from '../my-test-data.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, MyTestComponentComponent, MyTestComponent2Component],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  constructor(private myTestDataService: MyTestDataService) {}
  get v() {
    return this.myTestDataService.counter;
  }
}
