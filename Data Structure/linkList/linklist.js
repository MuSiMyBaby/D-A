1-->2-->3
1<--2<--3

let number1 = 1
let numberBefore = number1


let firstLinkedList ={
  head:{
    value:1,
    next:{
      value:2,
      next:{
        value:3,
        next:null
      }
    }
  }
}

class LinkedList {
  constructor(value){
    this.head ={
      value:value,
      next:null
    }
    this.tail= this.head
    this.length = 1
  }
  append(vaule){

  }
}
const linkedList = new LinkedList(1)
console.log(linkedList)