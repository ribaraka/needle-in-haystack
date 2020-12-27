function search(needle, haystack) {
    Object.values(haystack).forEach((value) => {
        if(value === needle){
            console.log(haystack[value]);
        }
        if(typeof haystack[value] === 'object'){
            search(needle, haystack[value]);
        }
    });
}

console.log(search(5, {a: 3, b: 5, c: 9})); // true
// search("5", {a: 3, b: 5, c: 9}); // false
//console.log(search(5, {a: 3, b: {u: 8, 5: 'c', s: 5}, c: 9})); // true
// search(5, {a: 3, b: {u: 8, 5: 'c', s: 7}, c: 9}); // false
// search(5, {a: [1, 2, 3, 5, 7, 9], c: 8, s: 6}); // true
// search(5, {a: [1, 2, {s: 4, c: {u: 5}},], s: 9}); // true

let data = {
    person: 'Mike',
    address: '123 Street, state, country',
    relatedCustomers: {
        childObject: {
            foo: ['bar'],
            person: 'Hailey'
        }
    }
};

//console.log(search('person', data)); // ['Mike', 'Hailey']