class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItem(index);
    return item;
  }
  shiftItem(index) {
    for (let i = index; i < this.length - 1; i++) {
      // i=2 i<4 i++=3
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  // Give [2,3,4,5,4,1], pop out 4 because of repetition .
  findRepetition(arr) {
    if (!arr || typeof arr !== "object" || !arr.length) {
      return "I need an array after all.";
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          console.log(arr[i]);
          return arr[i];
        }
      }
    }
    return "No Repetition found";
  }
}
const newArray = new Array();
export default newArray;
// [0,1,2,3]  -> Delete [2] = 2 -> [0,1,3], so [2] = [index+1]
