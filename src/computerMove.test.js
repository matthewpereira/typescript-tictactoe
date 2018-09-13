import { computerMove, validateMove, getRandomInt } from './computerMove';

const board = [
    ['x','o',null],
    ['x','o','x'],
    ['o','x','o']
];

describe('getRandomInt tests', () => {
    test("The function returns an integur less than max", () => {
        expect(getRandomInt(3)).toBeLessThanOrEqual(3);
    });
    
    test("The function returns an integur more than 0", () => {
        expect(getRandomInt(3)).toBeGreaterThanOrEqual(0);
    });
});

describe('validateMove tests', () => {
    test("The function returns false for an existing space", () => {
        expect(validateMove(1, 1, board)).toBeFalsy();
    });
    
    test("The function returns true for an empty space", () => {
        expect(validateMove(0, 2, board)).toBeTruthy();
    });
});

describe('computerMove tests', () => {
    test("The function returns false if there are two human players", () => {
        expect(computerMove('2', board)).toBeFalsy();
    });
    
    test("The function returns a real move for an one player game", () => {
        const move = computerMove('1', board);

        const valid = move.row === 0 && move.column === 2;
        
        expect(valid).toBeTruthy();
    });
});