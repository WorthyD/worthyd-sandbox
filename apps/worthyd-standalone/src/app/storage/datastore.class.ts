export abstract class DataStoreClass {
  abstract get<T = any>(key: string, customStore: any): Promise<T | undefined>;
  abstract set(key: string, value: any, customStore: any): Promise<void>;
}
