function sum(a) {
    let total = a;
    function add(b) {
        if (b === undefined) return total;
        total = total + b;
        return add;
    }
    return add;
}

function sum01(a) {
    return function add01(b) {
        return a + b;
    }
}

// console.log(sum01(2)(3));
// console.log(sum(2)(3)(4)()); // Output: 9

function sum02(...args) {
    let total = args.reduce((a, b) => a + b, 0);
    function add02(...next) {
        if (next.length === 0) return total;
        total += next.reduce((a, b) => a + b, 0);
        return add02;
    }
    return add02;
}

// console.log(sum02(2,3)(3,4)(4)());
