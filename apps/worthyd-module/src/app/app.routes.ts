import { Route } from '@angular/router';
import { MyProviderTesterComponent } from './my-provider-tester/my-provider-tester.component';
import { CounterComponent } from './counter/counter.component';
import { ProviderServiceService } from './services/provider-service.service';

export const appRoutes: Route[] = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'test',
    component: MyProviderTesterComponent,
    // providers: [
    //   {
    //     provide: ProviderServiceService,
    //     useFactory: () => new ProviderServiceService('Routes'),
    //   },
    // ],
  },
];
