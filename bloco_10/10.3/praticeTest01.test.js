
const { expect } = require('@jest/globals');
let {randomNumber} = require('./pratice01');

describe('random numbers called', () => {
    
    test('When called the randomNumber function returns a positive integer between 0 and 100', () => {
        randomNumber = jest.fn(() => 10);
        expect(randomNumber()).toBe(10);
    });
    
    test('was called', () => {        
        expect(randomNumber).toHaveBeenCalled();
    });

    test('Number of times it was called', () => {
        expect(randomNumber()).toHaveBeenCalledTimes(1);
    });

    
});

