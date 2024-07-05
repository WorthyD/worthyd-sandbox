import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { MyTestDataService } from './services/my-test-data.service';
import { MyTestDataMockService } from './services/my-test-data-mock.service';
import { MyTestDataMockServiceClass } from './services/my-test-data-class';

import { LocalStorageService } from './storage/local-storage.service';
import { CookieStorageService } from './storage/cookie-storage.service';
import { IdbKeyValService } from './storage/idb-key-val.service';
import { DataStoreClass } from './storage/datastore.class';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),

    // -------------------- Providing HTTP Client
    provideHttpClient(),
    //importProvidersFrom(HttpClientModule),

    // -------------------- Providing Services
    //MyTestDataService,
     { provide: MyTestDataService, useClass: MyTestDataMockService },
    // {
    //   provide: MyTestDataService,
    //   useFactory: () => new MyTestDataMockServiceClass(),
    // },

    // Storage Provider
    {
      provide: DataStoreClass,
      useClass: LocalStorageService,
      //useClass: CookieStorageService,
      //useClass: IdbKeyValService,
    },
  ],
};
