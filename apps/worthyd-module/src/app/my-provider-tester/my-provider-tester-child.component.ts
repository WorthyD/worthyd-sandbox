import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderServiceService } from '../services/provider-service.service';

@Component({
  selector: 'app-my-provider-tester-child',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: ProviderServiceService,
      useFactory: () => new ProviderServiceService('Child Component'),
    },
  ],

  template: `
    <h2>Provided From : {{ fromWhere }}</h2>
    <hr />
  `,
})
export class MyProviderTesterChildComponent {
  fromWhere;
  constructor(private service: ProviderServiceService) {
    this.fromWhere = service.whereFrom;
  }
}
