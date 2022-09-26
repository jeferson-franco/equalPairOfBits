const solution = require('./equalPairOfBits.js');

test('test 1', () => {
    expect(solution(10, 11)).toBe(2);
});

test('test 2', () => {
    expect(solution(0, 0)).toBe(1);
});

test('test 3', () => {
    expect(solution(28, 27)).toBe(8);
});

test('test 4', () => {
    expect(solution(895, 928)).toBe(32);
});

test('test 5', () => {
    expect(solution(1073741824, 1006895103)).toBe(262144);
});
