function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}


console.log(flattenArray([1, 2, [3, 4], 6, [7, [8, 9]]]));

const removeDuplicates = (arr) => [...new Set(arr)]

const removeDuplicates01 = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);

const removeDuplicates02 = (arr) => {
    const map = new Map();

    for (const val of arr) {
        if (!map.has(val)) {
            map.set(val, val);
        }
    }

    return Array.from(map.values());
};

const removeDuplicates03 = (arr) => {
    let seen = {};
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            seen[arr[i]] = true;
            res.push(arr[i]);
        }
    }

    return res;
}

// console.log(removeDuplicates01([1, 2, 4, 5, 5, 3, 6, 1, 2, 3]));
// console.log(removeDuplicates01([1,2,4,5,5,3,6,1,2,3]));
// console.log(removeDuplicates02([1,2,4,5,5,3,6,1,2,3]));
// console.log(removeDuplicates03([1,2,4,5,5,3,6,1,2,3]));


Array.prototype.myMap = function (cb) {
    let res = [];

    for (let i = 0; i < this.length; i++) {
        res.push(cb(this[i]));
    }

    return res;
}

Array.prototype.myFilter = function (cb) {
    let res = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            res.push(this[i]);
        }
    }

    return res;
}

Array.prototype.myReduce = function (cb, init) {
    let arr = this;
    let acc = init ? init : 0;
    let startIndex = init ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        acc = cb(acc, arr[i], i, arr);
    }

    return acc;
}


// console.log([1,2,3].myMap((it) => it*2));
// console.log([1,2,3].map((it) => it*2));

// console.log([1,2,3,4].filter((it) => it%2 === 0));
// console.log([1,2,3,4].myFilter((it) => it%2 === 0));

// console.log([1,2,3,4].reduce((acc, val) => acc + val, 0));
// console.log([1,2,3,4].myReduce((acc, val) => acc + val, 0));


