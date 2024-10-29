import { Route } from '@angular/router';
import { ScorerComponent } from './scorer/scorer.component';
import { IntakeComponent } from './sorter/intake/intake.component';
import { PlaygroundComponent } from './sorter/playground/playground.component';
import { Intake2Component } from './sorter/intake2/intake2.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ScorerComponent
  },
  {
    path: 'intake',
    component: IntakeComponent
  },
  {
    path: 'get-puzzle',
    component: Intake2Component
  },
  {
    path: 'playground/:words',
    component: PlaygroundComponent
  }
];
