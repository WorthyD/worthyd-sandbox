import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataStoreClass } from '../storage/datastore.class';

@Component({
  selector: 'app-storage-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './storage-component.component.html',
  styleUrl: './storage-component.component.scss',
})
export class StorageComponentComponent {
  constructor(public storage: DataStoreClass) {
    this.updateUI();
  }
  displayModel = '';
  model = { name: '' };
  onSubmit() {
    this.storage.set('name', this.model.name, '');
    this.updateUI();
  }

  updateUI() {
    this.storage.get('name', undefined).then((name) => {
      this.displayModel = name;
    });
  }
}
