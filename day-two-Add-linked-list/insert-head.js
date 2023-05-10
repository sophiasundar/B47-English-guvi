class Node{
    constructor(data ,next = null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
}
/*
let list = new LinkedList();
  list.head = new Node(3);
  list.head.next = new Node(4); // note the next's counting 
  list.head.next.next = new Node(5); // note the next's counting 
  list.head.next.next.next = new Node(6); // note the next's counting 
  list.head = new Node(2, list.head); // inserting at the top
  list.head = new Node(17, list.head.next.next.next); // inserting between 5 and 6.
  console.log(list);
                                 // or use below
  */
    let list = new LinkedList();
    let newNode = new Node(2); 
       newNode.next = list.head;
       list.head = newNode;
       console.log(list);