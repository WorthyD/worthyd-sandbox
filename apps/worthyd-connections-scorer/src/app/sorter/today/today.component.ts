import { Component } from '@angular/core';
import * as words from '../../../assets/words.json';
import { DragAndDropComponent } from '../drag-and-drop/drag-and-drop.component';

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [DragAndDropComponent],
  templateUrl: './today.component.html',
  styleUrl: './today.component.css'
})
export class TodayComponent {
  todaysWords: string[] = [];
  ngOnInit() {
    const x = words;
    this.todaysWords = x.allwords.map(x => x.content);
  }
}
