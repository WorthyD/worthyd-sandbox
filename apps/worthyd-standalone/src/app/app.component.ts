import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyTestComponentComponent } from './my-test-component/my-test-component.component';
import { StorageComponentComponent } from './storage-component/storage-component.component';

@Component({
  standalone: true,
  imports: [
    MyTestComponentComponent,
    StorageComponentComponent,
    RouterModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'worthyd-standalone';
}
