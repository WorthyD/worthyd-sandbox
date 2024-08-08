import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProvderTesterChildComponent } from '../my-provder-tester-child/my-provder-tester-child.component';
import { ProviderServiceService } from '../services/provider-service.service';

@Component({
  selector: 'app-my-provder-tester',
  standalone: true,
  imports: [CommonModule, MyProvderTesterChildComponent],
  providers: [
    {
      provide: ProviderServiceService,
      useFactory: () => new ProviderServiceService('Parent Component'),
    },
  ],
  templateUrl: './my-provder-tester.component.html',
  styleUrl: './my-provder-tester.component.css',
})
export class MyProvderTesterComponent {}
