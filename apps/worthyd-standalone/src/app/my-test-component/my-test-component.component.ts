import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MyTestDataService } from '../services/my-test-data.service';
import { User } from '../models/my-test-data-model';

@Component({
  selector: 'app-my-test-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if(users$ | async; as users){
    <h2>Users</h2>
    <ul>
      @for(user of users; track user.id){
      <li>
        {{ user.name }}
      </li>
      }
    </ul>

    }@else{
    <h3>Loading....</h3>
    }

  `,
})
export class MyTestComponentComponent {
  constructor(private myTestDataService: MyTestDataService) {}

  users$: Observable<User[]> = this.myTestDataService.getData();

}
