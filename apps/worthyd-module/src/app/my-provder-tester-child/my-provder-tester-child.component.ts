import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderServiceService } from '../services/provider-service.service';
// import { ProviderServiceService } from '../services/provider-service.service';

@Component({
  selector: 'app-my-provder-tester-child',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: ProviderServiceService,
      useFactory: () => new ProviderServiceService('Child Component'),
    },
  ],

  templateUrl: './my-provder-tester-child.component.html',
  styleUrl: './my-provder-tester-child.component.css',
})
export class MyProvderTesterChildComponent {
  fromWhere;
  constructor(private service: ProviderServiceService) {
    this.fromWhere = service.whereFrom;
  }
}
