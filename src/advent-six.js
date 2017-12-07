import test from './test';

export function adventSixPartOne(a) {
  const arr = [...a];
  const seen = [];
  let steps = 0;

  while (seen.indexOf(arr.join('|')) === -1) {
    const index = arr.indexOf(Math.max(...arr));
    const toDistribute = arr[index];

    seen.push(arr.join('|'));

    arr[index] = 0;

    for (let i = 0; i < toDistribute; i += 1) {
      arr[(i + index + 1) % arr.length] += 1;
    }

    steps += 1;
  }

  return steps;
}

export function adventSixPartTwo(a) {
  const arr = [...a];
  let seen = [];
  let steps = 0;
  let seenTwice = false;
  let firstSeen;

  while (!seenTwice) {
    const index = arr.indexOf(Math.max(...arr));
    const toDistribute = arr[index];

    arr[index] = 0;

    for (let i = 0; i < toDistribute; i += 1) {
      arr[(i + index + 1) % arr.length] += 1;
    }

    steps += 1;

    const search = arr.join('|');

    if (seen.indexOf(search) !== -1) {
      if (!firstSeen) {
        seen = [];
        firstSeen = steps;
      } else {
        seenTwice = true;
      }
    }

    seen.push(search);
  }

  return steps - firstSeen;
}

const testInput = [0, 2, 7, 0];
const input = [10, 3, 15, 10, 5, 15, 5, 15, 9, 2, 5, 8, 5, 2, 3, 6];

console.log('Advent Six:');
console.log('Part One:');
console.log('Tests:');
test(adventSixPartOne(testInput), 5, testInput.toString());
console.log('Answer:', adventSixPartOne(input));

console.log('Part Two:');
console.log('Tests:');
test(adventSixPartTwo(testInput), 4, testInput.toString());
console.log('Answer:', adventSixPartTwo(input));
