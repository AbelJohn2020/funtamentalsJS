// comparison

let x = 4;
let y = '4';


function conditionalsXY() {
    if( x === y ) {
        console.log('Is the same type and number');
    }
    if ( x == y ) {
        console.log('Is the same number but is different type')
    } else {
        console.log('They are completely different')
    }
}


const first = {
    name: 'Shion',
}

const second = {
    name: 'Shion',
}

function compareObjects() {
    if( first === second ) {
        console.log('Is the same name and object');
    }
    if ( first == second ) {
        console.log('Is the same name but is different object')
    } else {
        console.log('They are completely different')
    }
}