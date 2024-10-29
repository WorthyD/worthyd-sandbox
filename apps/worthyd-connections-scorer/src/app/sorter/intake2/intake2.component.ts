import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-intake2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intake2.component.html',
  styleUrl: './intake2.component.css'
})
export class Intake2Component implements OnInit {
  url = 'https://connections.swellgarfo.com/_next/data/ctLN6tVeiQWPUJZvK70j8/nyt/501.json?key=501';
  readonly originalDate = new Date('1/12/2023');

  connectionsForm = new FormGroup({
    puzzleNumber: new FormControl(``)
  });

  ngOnInit(): void {
    const puzzleNumber = this.datediff(this.originalDate, new Date());
  }
  datediff(first: Date, second: Date) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }
}
