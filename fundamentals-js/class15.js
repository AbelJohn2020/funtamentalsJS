// for loop

const forExample = {
    name: 'Regulus',
    genre: 'Male',
    age: 25,
    weight: 62,
}

console.log(`At the beginning of the year ${forExample.name} has ${forExample.weight}`);

const addWeight = 0.25;
const standard = 0.5;

const gainWeight = (forExample) => forExample.weight += addWeight
const loseWeight = (forExample) => forExample.weight -= addWeight

let i;
for(i = 1; i <= 365; i++) {
    // const randomNumber = parseFloat((Math.random()*10).toFixed(2));
    // const randomWeight = 57 + randomNumber;
    const random = parseFloat((Math.random()).toFixed(2))

    if(random < standard) {
        loseWeight(forExample);
    }else if(random === standard) {
        `Nice, your weigth is the same`
    } else {
        gainWeight(forExample)
    }
    
}
console.log(`In the end of the year ${forExample.name} has ${forExample.weight}`)