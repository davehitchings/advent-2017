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

export function adventThreePartTwo(input) {
  let ringWidth = 1;
  const arr = [];

  while (input > ringWidth ** 2) {
    ringWidth += 2;
  }

  for (let i = 0; i < ringWidth; i += 1) {
    const subArr = [];
    for (let j = 0; j < ringWidth; j += 1) {
      subArr.push(0);
    }
    arr.push(subArr);
  }

  const center = Math.floor(ringWidth / 2);
  let currX = center;
  let currY = center;

  ringWidth = 1;
  arr[currY][currX] = 1;

  let lastVal = 1;
  let position = 1;
  while (input >= lastVal) {
    const edge = ringWidth - 1;
    const first = (ringWidth - 2) ** 2;

    if (first + edge > position) {
      currY -= 1;
    } else if (first + (edge * 2) > position) {
      currX -= 1;
    } else if (first + (edge * 3) > position) {
      currY += 1;
    } else {
      currX += 1;
    }

    if (position === ringWidth ** 2) {
      ringWidth += 2;
    }

    lastVal =
      arr[currY - 1][currX] +
      arr[currY - 1][currX + 1] +
      arr[currY][currX + 1] +
      arr[currY + 1][currX + 1] +
      arr[currY + 1][currX] +
      arr[currY + 1][currX - 1] +
      arr[currY][currX - 1] +
      arr[currY - 1][currX - 1];

    arr[currY][currX] = lastVal;

    position += 1;
  }

  return lastVal;
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
test(adventThreePartTwo(27), 54, '27');
test(adventThreePartTwo(142), 147, '142');
test(adventThreePartTwo(143), 147, '143');
test(adventThreePartTwo(748), 806, '142');
console.log('Answer:', adventThreePartTwo(289326));
