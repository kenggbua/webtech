function createCounter() {
    let counter = 0;
    let incFunction = function() {
        counter += 1;
        return counter;
    }
    return incFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('result:', c1, c2, c3);