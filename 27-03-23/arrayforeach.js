array=[1,23,4];

function walk(el, idx, arr) {
    arr[idx] = el**2;
    console.log(idx, el, arr);
}

array.forEach(walk);
console.log(array)