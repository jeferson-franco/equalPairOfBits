# equalPairOfBits

***Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.***

You're given two integers, `n` and `m`. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

Return the value of `2position_of_the_found_pair` (0-based).

## Example

For `n = 10` and `m = 11`, the output should be
`solution(n, m) = 2`.

`10\^10 = 1010\^2`, `11\^10 = 1011\^2`, the position of the rightmost pair of equal bits is the bit at position `1` (0-based) from the right in the binary representations.
So the answer is `2^1 = 2`.

## Input/Output

- [execution-time-limit] 4 seconds (js)

- [input] integer n

Guaranteed constraints:
`0 ≤ n ≤ 2^30`.

- [input] integer m

Guaranteed constraints:
`0 ≤ m ≤ 2^30`.

- [output] integer
