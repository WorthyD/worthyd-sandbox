import { TestBed } from '@angular/core/testing';

import { ScoreEngineService } from './score-engine.service';

describe('ScoreEngineService', () => {
  let service: ScoreEngineService;

  beforeEach(() => {
    service = new ScoreEngineService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('buildScoreArray', () => {
    it('should split the array', () => {
      const input = `Puzzle #478
🟦🟦🟦🟦
🟨🟨🟨🟨
🟪🟪🟪🟪
🟩🟩🟩🟩`;

      const output = ['Puzzle #478', '🟦🟦🟦🟦', '🟨🟨🟨🟨', '🟪🟪🟪🟪', '🟩🟩🟩🟩'];

      const result = service.buildScoreArray(input);

      expect(result).toHaveLength(5);
      expect(result).toEqual(output);
    });
  });

  describe('buildAnswerScoreArray', () => {
    it('should split array of strings into array of array', () => {
      const input = ['hello', 'world'];
      const output = [
        ['h', 'e', 'l', 'l', 'o'],
        ['w', 'o', 'r', 'l', 'd']
      ];

      expect(service.buildAnswerScoreArray(input)).toEqual(output);
    });
  });

  describe('getScoredRows', () => {
    it('should filter out text rows', () => {
      const input = ['hello', 'world', '🟪🟪🟪🟪'];
      const output = ['🟪🟪🟪🟪'];

      const result = service.getScoredRows(input);
      expect(result).toHaveLength(1);
      expect(result).toEqual(output);
    });
  });

  describe('replaceColors', () => {
    it('should replace colors', () => {
      const input1 = '🟪🟪🟪🟪';
      const output1 = 'PPPP';

      expect(service.replaceColors(input1)).toEqual(output1);

      const input2 = '🟨🟩🟦🟪';
      const output2 = 'YGBP';

      expect(service.replaceColors(input2)).toEqual(output2);
    });
  });

  describe('getScoreForRow', () => {
    it('should score rows', () => {
      const guesses = [
        {
          input: [
            ['Y', 'Y', 'Y', 'Y'],
            ['G', 'G', 'G', 'G'],
            ['B', 'B', 'B', 'B'],
            ['P', 'P', 'P', 'P']
          ],
          result: [280, 360, 400, 400] // 2000
        },
        {
          input: [
            ['P', 'P', 'P', 'P'],
            ['B', 'B', 'B', 'B'],
            ['G', 'G', 'G', 'G'],
            ['Y', 'Y', 'Y', 'Y']
          ],
          result: [700, 480, 300, 160] //2340
        },
        {
          input: [
            ['P', 'P', 'P', 'G'],
            ['B', 'B', 'B', 'L'],
            ['B', 'B', 'B', 'L'],
            ['P', 'P', 'P', 'P'],
            ['B', 'B', 'B', 'B'],
            ['G', 'G', 'G', 'G'],
            ['Y', 'Y', 'Y', 'Y']
          ],
          result: [350, 240, 200, 400, 240, 120, 40] //1470
        },
        {
          //  no one away all guessed
          input: [
            ['Y', 'G', 'B', 'P'],
            ['Y', 'G', 'B', 'P'],
            ['Y', 'G', 'B', 'P'],
            ['Y', 'Y', 'Y', 'Y'],
            ['G', 'G', 'G', 'G'],
            ['B', 'B', 'B', 'B'],
            ['P', 'P', 'P', 'P']
          ],
          result: [140, 90, 75, 160, 90, 40, 10] //900
        }
      ];

      guesses.forEach((guess, index2) => {
        const array: number[] = [];
        guess.input.forEach((input, index) => {
          array.push(service.getScoreForRow(input, index));
        });
        //  console.log('inputs', guess.input);
        //  console.log('expected output', guess.result);
        // console.log('actual output ' + index2, array);
        console.log(
          'sum',
          array.reduce((a, b) => a + b, 0)
        );
      });

      expect([2, 2]).toHaveLength(2);
      // const array3: number[] = [];
      // reverseInputs3.forEach((input, index) => {
      //   array3.push(service.getScoreForRow(input, index));
      // });

      // expect(array3).toEqual(reverseOutputs3);
    });
  });

  describe('calculateCompleteScore', () => {
    it('total for last two rows swapped should be the same', () => {
      const guesses = [
        {
          input: [
            ['Y', 'Y', 'Y', 'Y'],
            ['G', 'G', 'G', 'G'],
            ['B', 'B', 'B', 'B'],
            ['P', 'P', 'P', 'P']
          ]
        },
        {
          input: [
            ['Y', 'Y', 'Y', 'Y'],
            ['G', 'G', 'G', 'G'],
            ['P', 'P', 'P', 'P'],
            ['B', 'B', 'B', 'B']
          ]
        }
      ];

      const r1 = service.calculateCompleteScore(guesses[0].input);
      const r2 = service.calculateCompleteScore(guesses[1].input);

      const r1Total = r1.reduce((a, b) => a + b, 0);
      const r2Total = r2.reduce((a, b) => a + b, 0);

      expect(r1Total).toEqual(r2Total);
    });
  });

  describe('generateScore', () => {
    it('', () => {
      const input = `Puzzle #478
    🟦🟦🟦🟦
    🟨🟨🟨🟨
    🟪🟪🟪🟪
    🟩🟩🟩🟩`;

      const expectedResult = [
        ['B', 'B', 'B', 'B'],
        ['Y', 'Y', 'Y', 'Y'],
        ['P', 'P', 'P', 'P'],
        ['G', 'G', 'G', 'G']
      ];

      const result = service.generateScore(input).totalScore;
      const expectedResultArray = service.calculateCompleteScore(expectedResult);
      const expectedResultTotal = expectedResultArray.reduce((a, b) => a + b, 0);

      expect(result).toEqual(expectedResultTotal);
    });
  });



  describe('generateScore', () => {
    it('', () => {
      const input = `Puzzle #481
🟨🟨🟨🟨
🟩🟩🟩🟩
🟦🟦🟦🟦
🟪🟪🟪🟪`;
      const result = service.generateScore(input).totalScore;

      expect(result).toEqual(3000);
    });
  });
});
