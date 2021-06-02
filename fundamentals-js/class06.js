//objects

const worker = {
    name: 'John',
    lastname: 'Arbildo',
    age: 25,
    occupation: 'student',
}

function TestingWorker({name, lastname, age, occupation}) {
    console.log(`My name is ${name} ${lastname} and I am ${age} years old and currently I am ${occupation}`)
}
TestingWorker(worker);