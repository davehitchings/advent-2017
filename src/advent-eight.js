import test from './test';
import input from './advent-eight-input';

export function applyMutation(r, cmd) {
  const registry = r;
  const parseRegexp = new RegExp(/^([a-z]+)\s([a-z]+)\s([-0-9]+)\sif\s([a-z]+)\s([!=><]+)\s([-0-9]+)$/, 'i');

  const [
    changeVar,
    mutation,
    mAmt,
    testVar,
    equality,
    eqTest,
  ] = parseRegexp.exec(cmd).slice(1);
  const equalityTest = parseInt(eqTest, 10);
  const mutationAmt = parseInt(mAmt, 10);
  let equalCheck = false;

  if (!registry[changeVar]) {
    registry[changeVar] = 0;
  }
  if (!registry[testVar]) {
    registry[testVar] = 0;
  }

  switch (equality) {
    case '==':
      equalCheck = registry[testVar] === equalityTest;
      break;
    case '!=':
      equalCheck = registry[testVar] !== equalityTest;
      break;
    case '>':
      equalCheck = registry[testVar] > equalityTest;
      break;
    case '<':
      equalCheck = registry[testVar] < equalityTest;
      break;
    case '>=':
      equalCheck = registry[testVar] >= equalityTest;
      break;
    case '<=':
      equalCheck = registry[testVar] <= equalityTest;
      break;
    default:
      console.warn(`unknown ${equality}`);
  }

  if (equalCheck) {
    if (mutation === 'inc') {
      registry[changeVar] += mutationAmt;
    } else {
      registry[changeVar] -= mutationAmt;
    }
  }
}

export function adventEightPartOne(arr) {
  const registry = {};

  arr.forEach(cmd => applyMutation(registry, cmd));

  return Math.max(...Object.values(registry));
}

export function adventEightPartTwo(arr) {
  const registry = {};
  let maxValue = 0;

  arr.forEach((cmd) => {
    applyMutation(registry, cmd);
    maxValue = Math.max(maxValue, ...Object.values(registry));
  });

  return maxValue;
}

const testInput = [
  'b inc 5 if a > 1',
  'a inc 1 if b < 5',
  'c dec -10 if a >= 1',
  'c inc -20 if c == 10',
];

console.log('Advent Eight:');
console.log('Part One:');
console.log('Tests:');
test(adventEightPartOne(testInput), 1, '1');
console.log('Answer:', adventEightPartOne(input));

console.log('Part Two:');
console.log('Tests:');
test(adventEightPartTwo(testInput), 10, '10');
console.log('Answer:', adventEightPartTwo(input));
