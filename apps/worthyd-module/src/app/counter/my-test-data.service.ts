import { Injectable } from '@angular/core';

@Injectable()
// @Injectable(
//   {
//   providedIn: 'root',
// })
export class MyTestDataService {
  counter = 0;
  increment() {
    this.counter++;
  }
}
