import { InjectionToken } from '@angular/core';

export abstract class DataStoreClass {
  abstract get<T = any>(key: string, customStore: any): Promise<T | undefined>;
  abstract set(key: string, value: any, customStore: any): Promise<void>;
}

// Vanilla Multi-tokens
export const DATA_STORES_CLASSES = new InjectionToken<DataStoreClass[]>(
  'DataStoreClass'
);

// Lightweight Multi-tokens
export abstract class DataStoreClasses extends DataStoreClass {}
