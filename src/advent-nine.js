import test from './test';
import input from './advent-nine-input';

export function adventNinePartOne(s) {
  const str = s.replace(/!./g, '').split('');
  let score = 0;
  const stack = [];

  str.forEach((char) => {
    const lastChar = stack[stack.length - 1];
    const isGarbage = lastChar === '<';

    switch (char) {
      case '{':
        if (!isGarbage) {
          stack.push(char);
          score += stack.filter(i => i === '{').length;
        }
        break;
      case '}':
        if (lastChar === '{') {
          stack.pop();
        }
        break;
      case '<':
        if (!isGarbage) {
          stack.push(char);
        }
        break;
      case '>':
        if (lastChar === '<') {
          stack.pop();
        }
        break;
      default:
    }
  });

  return score;
}

export function adventNinePartTwo(s) {
  const str = s.replace(/!./g, '').split('');
  let score = 0;
  const stack = [];

  str.forEach((char) => {
    const lastChar = stack[stack.length - 1];
    const isGarbage = lastChar === '<';

    switch (char) {
      case '<':
        if (!isGarbage) {
          stack.push(char);
        } else {
          score += 1;
        }
        break;
      case '>':
        if (lastChar === '<') {
          stack.pop();
        }
        break;
      default:
        if (isGarbage) {
          score += 1;
        }
    }
  });

  return score;
}

const partOneTestInput = '{},{{{}}},{{},{}},{{{},{},{{}}}},{<a>,<a>,<a>,<a>},{{<ab>},{<ab>},{<ab>},{<ab>}},{{<!!>},{<!!>},{<!!>},{<!!>}},{{<a!>},{<a!>},{<a!>},{<ab>}}';
const partTwoTestInput = '<>,<random characters>,<<<<>,<{!>}>,<!!>,<!!!>>,<{o"i!a,<{i<a>';

console.log('Advent Nine:');
console.log('Part One:');
console.log('Tests:');
test(adventNinePartOne(partOneTestInput), 50, '50');
console.log('Answer:', adventNinePartOne(input));

console.log('Part Two:');
console.log('Tests:');
test(adventNinePartTwo(partTwoTestInput), 32, '32');
console.log('Answer:', adventNinePartTwo(input));
