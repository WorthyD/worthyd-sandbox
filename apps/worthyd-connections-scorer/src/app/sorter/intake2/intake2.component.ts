import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { differenceInDays } from 'date-fns/differenceInDays';
import { HttpClient } from '@angular/common/http';
import { catchError, map, take } from 'rxjs';

@Component({
  selector: 'app-intake2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [],
  templateUrl: './intake2.component.html',
  styleUrl: './intake2.component.css'
})
export class Intake2Component implements OnInit {
  url = 'https://connections.swellgarfo.com/_next/data/ctLN6tVeiQWPUJZvK70j8/nyt/501.json?key=501';
  readonly originalDate = new Date('6/11/2023');

  constructor(private httpClient: HttpClient) {}

  connectionsForm = new FormGroup({
    puzzleNumber: new FormControl(0)
  });

  ngOnInit(): void {
    const puzzleNumber = differenceInDays(new Date(), this.originalDate);
    this.connectionsForm.setValue({ puzzleNumber });
  }

  onSubmit() {
    const puzzleNumber = this.connectionsForm.get('puzzleNumber')!.value;

    this.httpClient
      .get(`https://www.nytimes.com/svc/connections/v2/2024-10-29.json`, {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
      .pipe(take(1))
      .subscribe(result => {
        if (result) {
          console.log(result);
        }
      });
    //const heroesUrl = `${this.heroesSearchUrl}?${term}`;
    // console.log('getting');
    // this.httpClient
    //   .jsonp('https://www.nytimes.com/svc/connections/v2/2024-10-29.json', 'callback')
    //   .pipe(
    //     map(result => result),
    //     catchError(err => {
    //       console.log(err);
    //       throw err;
    //     })
    //   )
    //   .subscribe(result => {
    //     if (result) {
    //       console.log(result);
    //     }
    //   });
  }
}
