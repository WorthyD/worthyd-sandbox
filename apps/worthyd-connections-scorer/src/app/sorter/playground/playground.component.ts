import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { DragAndDropComponent } from '../drag-and-drop/drag-and-drop.component';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [CommonModule, DragAndDropComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  constructor(private route: ActivatedRoute) {}

  words$ = this.route.paramMap.pipe(
    map(params => {
      return params.get('words')?.split(',');
    })
  );
}
