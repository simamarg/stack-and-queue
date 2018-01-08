var Queue = function () {
    this.queue = [];

    this.print = function () {
        console.log(this.queue);
    }

    this.enqueue = function (x) {
         // adds x to the end of the queue (the last index in the array)
        this.queue[this.queue.length] = x;
    }

    this.isEmpty = function () {
        // tests if the queue is empty
        if (this.queue.length) {
            return false;
        }
        return true;
    }

    this.peek = function () {
        // returns a value of the beginning of the queue (the 1st index in the array)
        if (this.queue.length) {
            return this.queue[0];
        }
        return null;
    }

    this.dequeue = function () {
        // returns a value as well as removing one item from the beginning of the queue
        var head = this.peek();
        if (head !== null) {
            this.queue.splice(0, 1);
        }
        return head;
    }

    this.getMax = function () {
        // returns the max value in the queue without removing it
        var endOfQueue = Number.MIN_SAFE_INTEGER;
        this.enqueue(endOfQueue); // add the smallest number to the queue as a marker to the end of the queue
        var max = null;
        while (this.peek() !== endOfQueue) {
            var currentElement = this.dequeue();
            if (max === null || currentElement > max) {
                max = currentElement;
            }
            this.enqueue(currentElement);
        }
        this.dequeue(); // remove the marker of the end of the queue
        return max;
    }

    this.dequeueMax = function () {
        // returns the max value in the queue and removes it from the queue
        var max = this.getMax();
        var endOfQueue = Number.MIN_SAFE_INTEGER;
        this.enqueue(endOfQueue);
        while (this.peek() !== endOfQueue) {
            var currentElement = this.dequeue();
            if (currentElement !== max) {
                this.enqueue(currentElement);
            }
        }
        this.dequeue();
        return max;
    }
}

// test the queue:
var myQueue = new Queue();
console.log(myQueue.isEmpty());    //true
console.log(myQueue.print());      //[]
console.log(myQueue.enqueue(4));
console.log(myQueue.isEmpty());     //false
console.log(myQueue.enqueue(2));
console.log(myQueue.print());      //[4,2]
console.log(myQueue.peek());       //4
console.log(myQueue.getMax());     //4
console.log(myQueue.dequeue());    //4
console.log(myQueue.getMax());     //2
console.log(myQueue.dequeue());    //2
console.log(myQueue.peek());       //null
console.log(myQueue.isEmpty());    //true

console.log(myQueue.enqueue(4));
console.log(myQueue.enqueue(7));
console.log(myQueue.enqueue(5));
console.log(myQueue.enqueue(2));
console.log(myQueue.dequeueMax()); //7
console.log(myQueue.print());      //[4,5,2]