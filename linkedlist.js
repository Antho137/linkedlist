class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    };

    append(value) {
        const node = new Node(value);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }        
    };

    prepend(value) {
        const node = new Node(value);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    };

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    };

    head() {
        return this.head;
    };
    
    tail() {
        return this.tail;
    };

    at(index) {
        if (index < 0) {
            return null;
        }
        let current = this.head;
        let i = 0;

        while(i < index) {
            current = current.next;
            i++;
        }
        return current;
    };

    pop() {
        if (this.head === null) {
            return null;
        }
        let current = this.head;
        let previous = null;

        while (current.next !== null) {
            previous = current;
            current = current.next
        }
        return current.value;
    };

    contains(value) {
        let current = this.head;
        if (current.value === value) {
            return true;
        }
        current = current.next;
    };

    find(value) {
        let current = this.head;
        while (current !== null) {
            if  (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return false;
    };

    insertAt(index, value) {
        const node = new Node(value);
        let count = 1;
        let previousNode = this.head;

        while(count < index) {
            previousNode = previousNode.next;
            count++;
        }  
        node.next = previousNode.next;
        previousNode.next = node;
        return node;  
    }

    toString() {
        let result = '';
        let current = this.head;
        while (current) {
            result += `(${current.value}) -> `;
            current = current.next;
        }
        result += 'null'; 
        return result;
    };
}

let theList = new linkedList();
theList.append(2);
theList.append(37);
theList.append(24);
theList.prepend(20);
console.log(theList.toString());
console.log(theList.insertAt(1, 17));
console.log(theList.toString());
console.log(theList.size());
console.log(theList.find(37));