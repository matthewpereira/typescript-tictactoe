import { validRow, validColumn, validDiagonal, referee, areEqual } from './referee';

const winningRow = [
    ['x','x','x'],
    ['o','o',null],
    [null,null,null]
];
const nonWinningRow = [
    ['x','o',null],
    ['o', 'x',null],
    ['x', 'o',null],
];

const winningDiagonal1 = [
    ['x','o',null],
    [null,'x','o'],
    [null,null,'x']
];

const winningDiagonal2 = [
    [null,'o','x'],
    [null,'x','o'],
    ['x',null,null]
];

const nonWinningDiagonal = [
    ['o', 'o', null],
    [null, 'x', 'o'],
    [null, null, 'x']
];

const winningColumn = [
    ['x','o',null],
    ['x',null,'o'],
    ['x',null,null]
];


describe('row tests', () => {
    test("validRow detects a row", () => {
        expect(validRow(winningRow)).toBeTruthy();
    });

    test("validRow doesn't detect bad rows", () => {
        expect(validRow(nonWinningRow)).toBeFalsy();
    });
});

describe('diagonal tests', () => {
    test("validDiagonal detects winning diagonals like \\", () => {
        expect(validDiagonal(winningDiagonal1)).toBeTruthy();
    });

    test("validDiagonal detects winning diagonals like /", () => {
        expect(validDiagonal(winningDiagonal2)).toBeTruthy();
    });

    test("validDiagonal doesn't generate false positives", () => {
        expect(validDiagonal(nonWinningDiagonal)).toBeFalsy();
    });
});

describe('columns tests', () => {
    test("validColumn detects winning columns", () => {
        expect(validColumn(winningColumn)).toBeTruthy();
    });
});

describe('referee tests', () => {
    test("The ref returns valid results", () => {
        expect(referee(winningDiagonal1)).toBeTruthy();
        expect(referee(winningDiagonal2)).toBeTruthy();
        expect(referee(winningRow)).toBeTruthy();
        expect(referee(nonWinningRow)).toBeFalsy();
        expect(referee(winningColumn)).toBeTruthy();
    });
});

describe('areEqual test', () => {
    test("The function returns true for equal arguments", () => {
        expect(areEqual(1, 1, 1)).toBeTruthy();
    });
    test("The function returns false for non-equal arguments", () => {
        expect(areEqual(1, 0, 2)).toBeFalsy();
    });
});