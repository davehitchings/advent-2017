import test from './test';
import input from './advent-seven-input';

export function generateTree(a) {
  const nameWeightRegex = new RegExp(/([a-z]+)\s\(([0-9]+)\)/, 'i');
  const childrenRegex = new RegExp(/[a-z]+\s\([0-9]+\)\s->\s([a-z,\s]+)/, 'i');
  const arr = a.map((item) => {
    const nameWeight = nameWeightRegex.exec(item);
    const children = childrenRegex.exec(item);
    const node = {
      name: nameWeight[1],
      weight: parseInt(nameWeight[2], 10),
      children: [],
      childrenNames: [],
    };

    if (children) {
      node.childrenNames = children[1].split(', ');
    }

    return node;
  });
  const insertChild = (checkArr, child) => {
    for (let i = 0; i < checkArr.length; i += 1) {
      let moved = false;

      if (checkArr[i].childrenNames.indexOf(child.name) > -1) {
        checkArr[i].children.push(child);
        moved = true;
      } else if (checkArr[i].children.length > 0) {
        moved = insertChild(checkArr[i].children, child);
      }

      if (moved === true) {
        return true;
      }
    }

    return false;
  };
  let index = 0;

  while (arr.length > 1) {
    if (insertChild(arr, arr[index])) {
      arr.splice(index, 1);
    } else {
      index += 1;
    }
  }

  return arr;
}

export function adventSevenPartOne(a) {
  const arr = generateTree(a);

  return arr[0].name;
}

export function adventSevenPartTwo(a) {
  const arr = generateTree(a);
  const calculateTotalWeight = (d) => {
    const disc = d;
    let totalWeight = disc.weight;

    if (disc.children.length > 0) {
      disc.children.forEach((child) => {
        calculateTotalWeight(child);
        totalWeight += child.totalWeight;
      });
    }

    disc.totalWeight = totalWeight;

    return disc;
  };
  // const findDisc = (d) => {
  //   const disc = d;
  //
  //   if (disc.children.length > 0) {
  //
  //   }
  // };


  calculateTotalWeight(arr[0]);
  // findDisc(arr[0]);


  return 0;
}

const testInput = [
  'pbga (66)',
  'xhth (57)',
  'ebii (61)',
  'havc (66)',
  'ktlj (57)',
  'fwft (72) -> ktlj, cntj, xhth',
  'qoyq (66)',
  'padx (45) -> pbga, havc, qoyq',
  'tknk (41) -> ugml, padx, fwft',
  'jptl (61)',
  'ugml (68) -> gyxo, ebii, jptl',
  'gyxo (61)',
  'cntj (57)',
];

console.log('Advent Seven:');
console.log('Part One:');
console.log('Tests:');
test(adventSevenPartOne(testInput), 'tknk', 'tknk');
console.log('Answer:', adventSevenPartOne(input));

console.log('Part Two:');
console.log('Tests:');
test(adventSevenPartTwo(testInput), 60, '60');
// console.log('Answer:', adventSevenPartTwo(input));
