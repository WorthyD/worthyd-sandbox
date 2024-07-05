import { MyTestDataServiceInterface } from './my-test-data.interface';
import { Observable, delay, of } from 'rxjs';
import { User } from '../models/my-test-data-model';

export class MyTestDataMockServiceClass implements MyTestDataServiceInterface {
  mockUsers: Partial<User>[] = [
    {
      name: 'Test User 2',
    },
  ];

  getData(): Observable<User[]> {
    return of(this.mockUsers as User[]).pipe(delay(1000));
  }
}
