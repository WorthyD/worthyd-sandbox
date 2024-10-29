import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intake',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './intake.component.html',
  styleUrl: './intake.component.scss'
})
export class IntakeComponent {
  constructor(private router: Router) {}

  connectionsForm = new FormGroup({
    connectionsResult: new FormControl(``)
  });
  onSubmit() {
    // FLOP,CHARGE,PLASTIC,TURN,TIME,RIVER,CHANCE,CARD,MISS,PRIME,BUST,SHOT,RAINFOREST,CREDIT,DUD,KINDLE
    /// console.log(this.connectionsForm.get('connectionsResult')?.value);
    const input = this.connectionsForm.get('connectionsResult')!.value;

    if (input) {
      //console.log(input.replace("'", ''));
      this.router.navigate(['playground', input.replace("'", '')]);
    }
  }
}
