class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
 insertHead(data){
    this.head = new Node(data, this.head);
    } 
  
    toString(){
      let nodes = [];
        let thead = this.head;
        while(thead != null){
            nodes.push(thead.data);
            thead = thead.next;
        }
       return nodes;
  }

    insertTail(data){
        if(this.head != null){
         let thead = this.head;
        while(thead.next != null){
              thead = thead.next;
        }
       thead.next = new Node(data);
        }else{
            this.head = new Node(data);
        }
    }
    
    length(){
        let nodes = [];
        let thead = this.head;
        while(thead != null){
            nodes.push(thead.data);
            thead = thead.next;
        }
       return nodes.length;
    }
    deleteHead(){ 
        if(this.head != null){
        this.head = this.head.next;
        }
    }
    deleteTail(){
        if(this.head != null){
          if(this.head.next == null){
            this.head = null;
             }else{
         let thead = this.head;
             while(thead.next.next != null){
              thead = thead.next;
             }
        thead.next =  null;
          } 
       }
    }
}

let list = new LinkedList();
//let newNode = new Node(2);
//newNode.next =  list.head;
//list.head = newNode; 
  list.insertHead(5);
  list.insertHead(4);
  list.insertHead(3);
  list.insertHead(2);
  list.deleteTail(5);
  list.deleteTail(4);
console.log(list.toString());