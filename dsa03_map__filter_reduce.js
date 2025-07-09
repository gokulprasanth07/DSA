function sum(a) {
    let total = a;

    function add(b) {
        if (b === undefined) {
            return total;
        }
        total = total + b;
        return add;
    }

    return add;
}


console.log(sum(2)(3)(4)()); // Output: 9


// function sum(a){
//     function add(b){
//         return a+b;
//     }
//     return add;
// }


// const sum = (...args) => {
//   let total = args.reduce((a, b) => a + b, 0);

//   const adder = (...next) => {
//     if (next.length === 0) return total;
//     total += next.reduce((a, b) => a + b, 0);
//     return adder;
//   };

//   return adder;
// };

