//First, let's create a Node class:
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//Create the Linked List skeleton:
class LinkedList {
    constructor() {
        this.head = null; // Initially empty
    }
    // Check if Empty
    isEmpty() {
        return this.head === null;
    }
    //Insert at head
    insertAtHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    //insert at tail
    insertAtTail(data) {
        const newNode = new Node(data);
        
        if (this.isEmpty()) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
    //printList
    print() {
        let current = this.head;
        let result = "";
        
        while (current) {
            result += `${current.data} -> `;
            current = current.next;
        }
        result += "null";
        console.log(result);
    }
    //delete from head
    deleteFromHead() {
        if (this.isEmpty()) return;
        this.head = this.head.next;
    }
    //insert at index
    insertAtIndex(index, data) {
        if (index === 0) {
            this.insertAtHead(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;
        let count = 0;

        while (count < index - 1 && current) {
            current = current.next;
            count++;
        }

        if (current) {
            newNode.next = current.next;
            current.next = newNode;
        }
    }
    //delete from tail
    deleteFromTail() {
        if (this.isEmpty()) return;
        
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        current.next = null;
    }
}

const list = new LinkedList();
list.insertAtHead(3);
list.insertAtHead(2);
// list.insertAtHead(1);
// list.insertAtTail(4);
// list.insertAtIndex(2, 2.5);
// list.isEmpty()
// list.deleteFromHead();
// list.deleteFromTail();

list.print(); // 2 -> 2.5 -> 3 -> null
