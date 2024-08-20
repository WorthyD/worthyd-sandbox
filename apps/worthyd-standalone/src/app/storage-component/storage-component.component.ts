import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DATA_STORES_CLASSES,
  DataStoreClass,
  DataStoreClasses,
} from '../storage/datastore.class';

@Component({
  selector: 'app-storage-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './storage-component.component.html',
  styleUrl: './storage-component.component.scss',
})
export class StorageComponentComponent {
  displayModel = '';
  model = { name: '' };

  constructor(
    public storage: DataStoreClass,
    @Inject(DATA_STORES_CLASSES) public storages: DataStoreClasses[],
    @Inject(DataStoreClasses) public storages2: DataStoreClasses[]
  ) {
    this.updateUI();
    console.log('DATA_STORES_CLASSES', storages.length);
    console.log('DATA_STORES_CLASSES 2', storages2.length);
  }

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
