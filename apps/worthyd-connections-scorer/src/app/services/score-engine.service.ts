import { Injectable } from '@angular/core';

interface Color {
  color: string;
  symbol: string;
  value: number;
}

export interface GuessScore {
  guess: string[];
  guessValue: number;
}

export interface CompleteScoreSummary {
  guesses: GuessScore[];
  totalScore: number;
}

@Injectable({
  providedIn: 'root'
})
export class ScoreEngineService {
  readonly guessCount = 4;
  readonly guessCountModifier = 1;
  readonly oneAway = 3;
  readonly oneAwayModifier = 0.3;

  readonly guessWeights = [100, 90, 70, 50, 30, 20, 10];

  readonly yellow: Color = {
    color: '🟨',
    symbol: 'Y',
    value: 4
  };
  readonly green: Color = {
    color: '🟩',
    symbol: 'G',
    value: 6
  };
  readonly blue: Color = {
    color: '🟦',
    symbol: 'B',
    value: 10
  };
  readonly purple: Color = {
    color: '🟪',
    symbol: 'P',
    value: 14
  };

  readonly colorArray: Color[] = [this.yellow, this.green, this.blue, this.purple];

  generateScore(shareScoreString: string): CompleteScoreSummary {
    // Convert block of guesses into array
    const sharedScoreArray = this.buildScoreArray(shareScoreString);

    // Remove any rows not containing guesses
    const scoredRows = this.getScoredRows(sharedScoreArray);

    // Replace color blocks with color codes
    const symbolBasedRows = scoredRows.map(scoredRow => this.replaceColors(scoredRow));

    // Break apart rows into character arrays
    const brokenOutGuessRows = this.buildAnswerScoreArray(symbolBasedRows);

    const guessScoring = this.calculateCompleteScore(brokenOutGuessRows);

    return {
      guesses: brokenOutGuessRows.map((guessRow, index) => {
        return {
          guess: guessRow,
          guessValue: guessScoring[index]
        };
      }),

      totalScore: guessScoring.reduce((a, b) => a + b, 0)
    };

    // Strip puzzle item
    // Break apart array
    // Generate Score Array
    // Generate row score
    // Return Object with item array and score array
  }

  calculateCompleteScore(guessRows: string[][]): number[] {
    const scoreArray: number[] = [];
    const totalGuesses = guessRows.length;

    guessRows.forEach((guessRow, index) => {
      let guessIndex = index;
      // Last guess needs to equal the previous one's value
      if (index + 1 === totalGuesses) {
        guessIndex--;
      }
      scoreArray.push(this.getScoreForRow(guessRow, guessIndex));
    });
    return scoreArray;
  }

  buildScoreArray(sharedScoreString: string): string[] {
    const sharedScoreArray = sharedScoreString.split('\n');
    return sharedScoreArray;
  }
  buildAnswerScoreArray(sharedScoreArray: string[]): string[][] {
    return sharedScoreArray.map(x => x.split(''));
  }

  getScoredRows(splitRows: string[]) {
    return splitRows.filter(row => this.colorArray.some(c => row.indexOf(c.color) > -1));
  }

  getScoreForRow(rowArray: string[], guessIndex: number) {
    let score = 0;

    this.colorArray.forEach(c => {
      const colorCount = rowArray.filter(r => r === c.symbol);
      if (colorCount.length === this.guessCount) {
        score = this.calculateScore(c.value, this.guessCountModifier, this.getGuessIndexModifier(guessIndex));
      } else if (colorCount.length === this.oneAway) {
        score = this.calculateScore(c.value, this.oneAwayModifier, this.getGuessIndexModifier(guessIndex));
      }
    });
    return score;
  }

  getGuessIndexModifier(guessIndex: number): number {
    return this.guessWeights[guessIndex];
  }

  calculateScore(colorValue: number, guessModifier: number, guessIndexModifier: number) {
    return colorValue * guessModifier * guessIndexModifier;
  }

  replaceColors(row: string): string {
    let mutableRow = row;
    this.colorArray.forEach(c => {
      mutableRow = mutableRow.replace(new RegExp(c.color, 'g'), c.symbol);
    });
    return mutableRow;
  }
}
