const example = {
    name: 'Line',
    lastname: 'Flowers',
    age: 22,
    occupation: 'Teacher',
    country: 'Mexico',
    city: 'Mexico City',
}

function TestExample(she) {
   she.age += 1;
   // here the age change
}

function NotChangeExample({age}) {
    age += 1;
    //here the age doesn't change
}

//spread operator

function SpreadOperatorExample(she) {
    return {
        ...she,
        age: she.age += 1,
    }

    // other way to change age value
}