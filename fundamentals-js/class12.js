const otherWorker = {
    name: 'Abel',
    lastname: 'Arbildo',
    age: 25,
    country: 'Peru',
    city: 'Lima',
    engineer: true,
    married: false,
    journey: false,
    schedule: '9:00 - 18:00',
}

function isAdult(sameFirstWorker) {
    return sameFirstWorker.age >= 18
}

function printProfession(firstWorker) {
    const printMessage = `${firstWorker.name} ${firstWorker.lastname} is: `;
    console.log(printMessage)
    if( firstWorker.engineer ) {
         console.log('Engineer');
    } else {
        console.log('not Engineer');
    }

    if(isAdult(firstWorker)) {
        console.log('And I am Adult')
    } else {
        console.log("I am not Adult")
    }
};

function init() {
    isAdult(otherWorker)
    printProfession(otherWorker);
}