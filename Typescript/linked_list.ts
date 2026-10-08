class Node<T> {
    data: T;
    next: Node<T> | null = null;
    constructor(data: T) {
        this.data = data;
    }
}

class GenericLinkedList<T> {
    head: Node<T> | null = null;

    append(data: T): void {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    printList(): void {
        let current = this.head;
        const elements: T[] = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(" -> "));
    }
}

// Example usage:
const list = new GenericLinkedList<number>();
list.append(10);
list.append(20);
list.append(30);
list.printList(); // Output: 10 -> 20 -> 30