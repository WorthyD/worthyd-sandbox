import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorDisplay',
  standalone: true
})
export class ColorDisplayPipe implements PipeTransform {
  transform(value: string): unknown {
    // YES IT IS A SWITCH CASE DEAL WITH IT JON/RYAN/AND WHOMEVER ELSE!
    switch (value) {
      case 'Y':
        return '🟨';
      case 'G':
        return '🟩';
      case 'B':
        return '🟦';
      case 'P':
        return '🟪';

      default:
        return '';
    }
  }
}
