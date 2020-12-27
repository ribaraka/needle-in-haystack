function search(needle, haystack) {
  return Object.keys(haystack).some((key) => {
    if (needle === haystack[key]) {
      return true;
    }
    if (typeof haystack[key] === 'object') {
      return search(needle, haystack[key]);
    }
  });
}

console.log(search(5, {a: 3, b: 5, c: 9})); // true
console.log(search("5", {a: 3, b: 5, c: 9})); // false
console.log(search(5, {a: 3, b: {u: 8, 5: 'c', s: 5}, c: 9})); // true
console.log(search(5, {a: 3, b: {u: 8, 5: 'c', s: 7}, c: 9})); // false
console.log(search(5, {a: [1, 2, 3, 5, 7, 9], c: 8, s: 6})); // true
console.log(search(5, {a: [1, 2, {s: 4, c: {u: 5}},], s: 9})); // true
console.log(search(5, {a: [1, 2, {s: 4, c: 1},{u: 5}], s: 9})); // true

