import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProviderTesterChildComponent } from './my-provider-tester-child.component';
import { ProviderServiceService } from '../services/provider-service.service';

@Component({
  selector: 'app-my-provider-tester',
  standalone: true,
  imports: [CommonModule, MyProviderTesterChildComponent],
  providers: [
    {
      provide: ProviderServiceService,
      useFactory: () => new ProviderServiceService('Parent Component'),
    },
  ],
  template: '<app-my-provider-tester-child></app-my-provider-tester-child>',
})
export class MyProviderTesterComponent {}
