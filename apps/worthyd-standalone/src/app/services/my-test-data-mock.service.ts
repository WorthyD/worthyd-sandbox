import { Injectable } from '@angular/core';
import { MyTestDataServiceInterface } from './my-test-data.interface';
import { Observable, delay, of } from 'rxjs';
import { User } from '../models/my-test-data-model';

@Injectable()
export class MyTestDataMockService implements MyTestDataServiceInterface {
  mockUsers: Partial<User>[] = [
    {
      name: 'Test User 1',
    },
  ];

  getData(): Observable<User[]> {
    return of(this.mockUsers as User[]).pipe(delay(1000));
  }
}
