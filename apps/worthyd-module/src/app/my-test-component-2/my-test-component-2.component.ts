import { Component } from '@angular/core';
import { MyTestDataService } from '../my-test-data.service';
import { MyTestComponent3Component } from '../my-test-component-3/my-test-component-3.component';

@Component({
  selector: 'app-my-test-component-2',
  standalone: true,
  imports: [MyTestComponent3Component],
  providers: [MyTestDataService],
  templateUrl: './my-test-component-2.component.html',
  styleUrl: './my-test-component-2.component.css',
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
