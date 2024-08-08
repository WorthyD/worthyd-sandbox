import { Route } from '@angular/router';
import { MyProvderTesterComponent } from './my-provder-tester/my-provder-tester.component';
import { CounterComponent } from './counter/counter.component';
import { ProviderServiceService } from './services/provider-service.service';

export const appRoutes: Route[] = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'test',
    component: MyProvderTesterComponent,
    providers:[
      {
        provide: ProviderServiceService,
        useFactory: () => new ProviderServiceService('Routes'),
      },
    ]
  },
];
