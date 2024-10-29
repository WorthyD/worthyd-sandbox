import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from '../nx-welcome.component';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ColorDisplayPipe } from '../color-display.pipe';
import { CompleteScoreSummary, ScoreEngineService } from '../services/score-engine.service';

@Component({
  selector: 'app-scorer',
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ReactiveFormsModule, ColorDisplayPipe],
  templateUrl: './scorer.component.html',
  styleUrl: './scorer.component.scss'
})
export class ScorerComponent {
  results?: CompleteScoreSummary = undefined;

  constructor(private scoreEngineService: ScoreEngineService) {}

  //   connectionsForm = new FormGroup({
  //     connectionsResult: new FormControl(`Puzzle #478
  // 🟦🟦🟦🟦
  // 🟨🟨🟨🟨
  // 🟪🟪🟪🟪
  // 🟩🟩🟩🟩`)
  //   });

  connectionsForm = new FormGroup({
    connectionsResult: new FormControl(``)
  });

  onSubmit() {
    /// console.log(this.connectionsForm.get('connectionsResult')?.value);
    const input = this.connectionsForm.get('connectionsResult')!.value;

    if (input) {
      this.results = this.scoreEngineService.generateScore(input);
    }
  }
}
