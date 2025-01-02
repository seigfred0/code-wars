function filter_list(l) {
    return filtered = l.filter((item) => typeof item === 'number');
}


const problem = filter_list([1,'a','b',0,15]);
console.log(typeof 0 === 'number')
