// Give [2,3,4,5,4,1], pop out 4 because of repetition .

function findRepetition_object(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    }
    if (map[arr[i]]) {
      return arr[i];
    } else {
      map[arr[i]] = i; // give a value.
    }
  }
  return "No repetition";
}

findRepetition_object([2, 3, 4, 5, 4, 1]);
