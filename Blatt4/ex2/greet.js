

let greet =
    gender =>
        name =>
            'Dear ' + (gender === 'female' ? 'Mrs. ' : 'Mr. ') + name;
let women = ['Susan', 'Karen', 'Amanda'];
let greetWoman = greet('female');

for(let w of women)
    console.log(greetWoman(w));

