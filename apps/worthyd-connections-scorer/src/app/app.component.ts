import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CompleteScoreSummary, ScoreEngineService } from './services/score-engine.service';
import { ColorDisplayPipe } from './color-display.pipe';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ReactiveFormsModule, ColorDisplayPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'worthyd-connections-scorer';

}
