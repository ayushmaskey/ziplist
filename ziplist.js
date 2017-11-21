// 1st try (26min DNF) - could figure out underscore solution
// 2nd try (15min) - getting used to command line git

function ziplist(listOne, listTwo) {
  const newArray = [];
  for (let i = 0; i < listOne.length; i++) {
    newArray.push(listOne[i]);
    newArray.push(listTwo[i]);
  }
  return newArray;
}

function zipListTheSimpleWay(listOne, listTwo) {
  const zipped = _.zip(listOne, listTwo);
  return _.flatten(zipped);
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

console.log(ziplist(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));
