import test from './test';

export function adventThreePartOne(input) {
  const arr = [
    {
      horizontal: 0,
      vertical: 0,
    },
  ];
  let ringWidth = 1;

  for (let i = 1; i < input; i += 1) {
    const change = {
      horizontal: 0,
      vertical: 0,
    };

    const edge = ringWidth - 1;
    const first = (ringWidth - 2) ** 2;

    if (first + edge > i) {
      change.vertical = -1;
    } else if (first + (edge * 2) > i) {
      change.horizontal = -1;
    } else if (first + (edge * 3) > i) {
      change.vertical = 1;
    } else {
      change.horizontal = 1;
    }

    if (i === ringWidth ** 2) {
      ringWidth += 2;
    }

    arr[i] = change;
  }

  const movement = arr.reduce((sum, val) => ({
    horizontal: sum.horizontal + val.horizontal,
    vertical: sum.vertical + val.vertical,
  }));

  return Math.abs(movement.horizontal) + Math.abs(movement.vertical);
}

export function adventThreePartTwo() {
  return 0;
}

console.log('Advent Three:');
console.log('Part One:');
console.log('Tests:');
test(adventThreePartOne(12), 3, '12');
test(adventThreePartOne(23), 2, '23');
test(adventThreePartOne(1024), 31, '1024');
test(adventThreePartOne(1024), 31, '1024');
console.log('Answer:', adventThreePartOne(289326));

console.log('Part Two:');
console.log('Tests:');
test(adventThreePartTwo(), 0, '');
console.log('Answer:', adventThreePartTwo());
