const reverseWords = (s) => {
    return s.split(" ").reverse().join(" ");
}


const str = "today is thursday";
console.log(reverseWords(str))


const s1 = "malayalam";
const s2 = "something";

const checkForPalindrome = (s) => {
    const l = s.length;
    for (let i = 0; i <= l / 2; i++) {
        if (s[i] !== s[l - i - 1]) {
            return false
        }
    }
    return true;
}
console.log(checkForPalindrome(s2));

const sortedStr = (s) => s.toLowerCase().split("").sort().join("");

const checkForAnagram = (s1, s2) => {
    return sortedStr(s1) === sortedStr(s2);
}

console.log(checkForAnagram("listen", "silent"));     // true
console.log(checkForAnagram("hello", "world"));       // false
console.log(checkForAnagram("Dormitory", "Dirtyroom")); // true


// const sortedStr = (s) => s.toLowerCase().split("").sort().join("");

const findAnagramSubstrings = (text, word) => {
    const result = [];
    const wordLen = word.length;
    const target = sortedStr(word);

    for (let i = 0; i <= text.length - wordLen; i++) {
        const substr = text.slice(i, i + wordLen);
        if (sortedStr(substr) === target) {
            result.push(substr);
        }
    }

    return result;
};

// Example usage:
const text = "cbabadcbbabbcbabaabccbabc";
const word = "abbc";
const anagrams = findAnagramSubstrings(text, word);

console.log(anagrams);
// Output: All substrings of length 4 that are anagrams of "abbc"
