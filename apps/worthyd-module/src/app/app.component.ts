import { Component } from '@angular/core';
import { MyTestDataService } from './my-test-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'worthyd-module';
  constructor(private myTestDataService: MyTestDataService) {}
  get v() {
    return this.myTestDataService.counter;
  }
}
