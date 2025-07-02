const removeDuplicates = (arr) => [...new Set(arr)];

// console.log(removeDuplicates([1,2,3,4,5,6,5,4,3,2,1,9]));

const removeDup = (a) => {
    const res = [];
    const mp = {};
    for (let i = 0; i < a.length; i++) {
        if (!mp[a[i]]) {
            mp[a[i]] = true;
            res.push(a[i]);
        }
    }
    return res;
}

// console.log(removeDup([1,2,3,4,5,6,5,4,3,2,1,9,1,2,3,4,8]));

const flatten = (arr) => {
    const result = [];

    for (let el of arr) {
        if (Array.isArray(el)) {
            result.push(...flatten(el))
        } else {
            result.push(el);
        }
    }

    return result;
};

console.log(flatten([1, [2, [3, [4, 5]]]]));
