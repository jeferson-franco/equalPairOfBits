function solution(n, m) {
    return 1 << ((n ^ m).toString(2).split('').reverse().join('') + '0').indexOf('0');
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test equalPairOfBits

// alternative solution
