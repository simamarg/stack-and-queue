var Stack = function () {
    this.stack = [];

    this.print = function () {
        console.log(this.stack);
    }

    this.push = function (x) {
        // adds x to the top of the stack
        this.stack[this.stack.length] = x;
    }

    this.isEmpty = function () {
        // tests if the stack is empty
        if (this.stack.length) {
            return false;
        }
        return true;
    }

    this.peek = function () {
        // returns a value of the top of the stack
        if (!this.isEmpty()) {
            return this.stack[this.stack.length - 1];
        }
        return null;
    }

    this.pop = function () {
        // returns a value as well as removing top item from the stack
        var top = this.peek();
        if (top !== null) {
            this.stack.length = this.stack.length - 1;
        }
        return top;
    }
}

// special stack used for keeping the min values of the original stack
var MinValueStack = function () {
    this.stack = [];
    this.minValues = new Stack();

    this.print = function () {
        console.log(this.stack);
    }

    this.push = function (x) {
        if (this.isEmpty() || this.getMin() > x) {
            this.minValues.push(x);
        }
        this.stack[this.stack.length] = x;
    }

    this.isEmpty = function () {
        // tests if the Stack is empty
        if (this.stack.length) {
            return false;
        }
        return true;
    }

    this.peek = function () {
        // returns a value of the top of the stack
        if (!this.isEmpty()) {
            return this.stack[this.stack.length - 1];
        }
        return null;
    }

    this.pop = function () {
        // returns a value as well as removing top item from the stack
        var top = this.peek();
        if (top !== null) {
            if (this.getMin() === top) {
                this.minValues.pop();
            }
            this.stack.length = this.stack.length - 1;
        }
        return top;
    }

    this.getMin = function () {
        if (!this.isEmpty()) {
            return this.minValues.peek();
        }
        return null;
    }
}

// test the stack:
var myStack = new Stack();
console.log(myStack.isEmpty());    //true
console.log(myStack.print());      //[]
console.log(myStack.push(2));
console.log(myStack.isEmpty());     //false
console.log(myStack.push(4));
console.log(myStack.print());      //[2,4]
console.log(myStack.peek());       //4
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.peek());       //null
console.log(myStack.isEmpty());    //true

var myMinValueStack = new MinValueStack();
console.log(myMinValueStack.isEmpty());    //true
console.log(myMinValueStack.print());      //[]
console.log(myMinValueStack.getMin());     //null
console.log(myMinValueStack.push(4));
console.log(myMinValueStack.isEmpty());    //false
console.log(myMinValueStack.push(2));
console.log(myMinValueStack.print());      //[4,2]
console.log(myMinValueStack.getMin());     //2
console.log(myMinValueStack.pop());        //2
console.log(myMinValueStack.getMin());     //4