import { APP_INITIALIZER, Component, Inject } from '@angular/core';
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
  constructor(
    public storage: DataStoreClass,
    @Inject(DATA_STORES_CLASSES) public storages: DataStoreClasses[],
    @Inject(DataStoreClasses) public storages2: DataStoreClasses[],
    @Inject(APP_INITIALIZER) public init: any[]
  ) {
    this.updateUI();
    console.log('DATA_STORES_CLASSES', storages.length);
    console.log('DATA_STORES_CLASSES 2', storages2.length);
    console.log('APP_INITIALIZER 2', init.length);
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
