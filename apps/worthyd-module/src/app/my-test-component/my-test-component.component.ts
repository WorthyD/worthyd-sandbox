import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTestDataService } from '../my-test-data.service';

@Component({
  selector: 'app-my-test-component',
  standalone: true,
  imports: [CommonModule],
  providers: [MyTestDataService],
  templateUrl: './my-test-component.component.html',
  styleUrl: './my-test-component.component.css',
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
