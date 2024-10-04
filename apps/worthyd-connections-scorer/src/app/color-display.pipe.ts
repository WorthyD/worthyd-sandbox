import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorDisplay',
  standalone: true
})
export class ColorDisplayPipe implements PipeTransform {
  transform(value: string): unknown {
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
