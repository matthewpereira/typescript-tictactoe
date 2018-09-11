import { validRow, validColumn, validDiagonal } from './referee';

const winningRow = ['x','x','x'];
const nonWinningRow = ['x','o',''];

const winningDiagonal1 = [
  ['x','o',''],
  ['','x','o'],
  ['','','x']
];

const winningDiagonal2 = [
  ['','o','x'],
  ['','x','o'],
  ['x','','']
];

const winningColumn = [
  ['x','o',''],
  ['x','','o'],
  ['x','','']
];


describe('row tests', () => {
  test("The ref detects a row", () => {
    expect(validRow(winningRow)).toBeTruthy();
  });
  
  test("The ref doesn't detect bad rows", () => {
    expect(validRow(nonWinningRow)).toBeFalsy();
  });  
});

describe('diagonals tests', () => {
  test("The ref detects winning diagonals like \\", () => {
    expect(validDiagonal(winningDiagonal1)).toBeTruthy();
  });

  test("The ref detects winning diagonals like /", () => {
    expect(validDiagonal(winningDiagonal2)).toBeTruthy();
  });
});

describe('columns tests', () => {
  test("The ref detects winning columns", () => {
    expect(validColumn(winningColumn)).toBeTruthy();
  });
});