class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    inserttail(data) {
        this.tail = new Node(data, this.tail);
    }
    deleteTail(data) {
        this.tail = new Node(data, this.tail)
    }

    toString() {
        let nodes = [];
        let thead = this.tail;
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        return nodes;
    } }

    let list = new LinkedList();

    list.inserttail(5);
    list.inserttail(4);
    list.inserttail(3);
    list.inserttail(2);
   console.log(list.toString().length);