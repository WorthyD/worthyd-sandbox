import { Component } from '@angular/core';
import { MyTestDataService } from '../my-test-data.service';

@Component({
  selector: 'app-my-test-component-3',
  standalone: true,
  imports: [],
  templateUrl: './my-test-component-3.component.html',
  styleUrl: './my-test-component-3.component.css'
})
export class MyTestComponent3Component {
  constructor(private myTestDataService: MyTestDataService) {}
  get count() {
    return this.myTestDataService.counter;
  }
}
