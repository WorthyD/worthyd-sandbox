import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { User } from '../models/my-test-data-model';
import { MyTestDataServiceInterface } from './my-test-data.interface';

@Injectable()
export class MyTestDataService implements MyTestDataServiceInterface {
  constructor(private httpClient: HttpClient) {}

  getData():Observable<User[]> {
    return this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(delay(1000));
  }
}
