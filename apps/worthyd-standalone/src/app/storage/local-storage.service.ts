import { Injectable } from '@angular/core';
import { DataStoreClass } from './datastore.class';

@Injectable()
export class LocalStorageService implements DataStoreClass {
  AppPrefix = '';

  get<T = any>(key: string, customStore = undefined): Promise<T | undefined> {
    return new Promise((resolve, reject) => {
      resolve(
        JSON.parse(localStorage.getItem(`${this.AppPrefix}${key}`) || '')
      );
    });
  }

  set(key: string, value: any, customStore = undefined): Promise<void> {
    return new Promise((resolve, reject) => {
      localStorage.setItem(`${this.AppPrefix}${key}`, JSON.stringify(value));
      resolve();
    });
  }
}
