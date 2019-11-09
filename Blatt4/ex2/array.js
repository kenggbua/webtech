const ar = (x) => {
    let test = [];


    for (let i = 0; i < x.length; i++) {
        if(x[i] >= 0 && Number.isInteger(x[i])){
            test.push(Math.pow(x[i],2));
        }
    }
    return test;
}

let g = [1,2,3,5,-29,2.7,123,23,312, -12];


const out = input => input.filter(n => Number.isInteger(n) && n >= 0);

console.log(ar(g))

let test = ar(g);

for (let x in test){
    console.log(test[x])
}

console.log(out(g))


