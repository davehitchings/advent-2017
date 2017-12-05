import test from './test';
import input from './advent-four-input';

export function adventFourPartOne(arr) {
  let validCount = 0;

  arr.forEach((str) => {
    const subArr = str.split(' ');

    validCount += new Set(subArr).size === subArr.length ? 1 : 0;
  });

  return validCount;
}

export function adventFourPartTwo(arr) {
  let validCount = 0;

  arr.forEach((str) => {
    const subArr = str.split(' ').map(substr => (substr.split('').sort().join('')));

    validCount += new Set(subArr).size === subArr.length ? 1 : 0;
  });

  return validCount;
}


console.log('Advent Four:');
console.log('Part One:');
console.log('Tests:');
test(adventFourPartOne(['aa bb cc dd ee']), 1, 'aa bb cc dd ee');
test(adventFourPartOne(['aa bb cc dd aa']), 0, 'aa bb cc dd aa');
test(adventFourPartOne(['aa bb cc dd aaa']), 1, 'aa bb cc dd aaa');
console.log('Answer:', adventFourPartOne(input));

console.log('Part Two:');
console.log('Tests:');
test(adventFourPartTwo(['abcde fghij']), 1, 'abcde fghij');
test(adventFourPartTwo(['abcde xyz ecdab']), 0, 'abcde xyz ecdab');
test(adventFourPartTwo(['a ab abc abd abf abj']), 1, 'a ab abc abd abf abj');
test(adventFourPartTwo(['iiii oiii ooii oooi oooo']), 1, 'iiii oiii ooii oooi oooo');
test(adventFourPartTwo(['oiii ioii iioi iiio']), 0, 'oiii ioii iioi iiio');
console.log('Answer:', adventFourPartTwo(input));
