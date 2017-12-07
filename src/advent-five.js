import test from './test';
import input from './advent-five-input';

export function adventFivePartOne(a) {
  const arr = [...a];
  let steps = 0;
  let cursor = 0;

  while (arr[cursor] !== undefined) {
    const nextCursor = cursor + arr[cursor];

    arr[cursor] += 1;
    cursor = nextCursor;
    steps += 1;
  }

  return steps;
}

export function adventFivePartTwo(a) {
  const arr = [...a];
  let steps = 0;
  let cursor = 0;

  while (arr[cursor] !== undefined) {
    const nextCursor = cursor + arr[cursor];

    arr[cursor] += arr[cursor] >= 3 ? -1 : 1;
    cursor = nextCursor;
    steps += 1;
  }

  return steps;
}

console.log('Advent Five:');
console.log('Part One:');
console.log('Tests:');
test(adventFivePartOne([0, 3, 0, 1, -3]), 5, '5 Steps');
console.log('Answer:', adventFivePartOne(input));

console.log('Part Two:');
console.log('Tests:');
test(adventFivePartTwo([0, 3, 0, 1, -3]), 10, '10 Steps');
console.log('Answer:', adventFivePartTwo(input));
