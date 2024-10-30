import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.scss'
})
export class DragAndDropComponent {
  @Input() words: string[] | null | undefined = [];
}
