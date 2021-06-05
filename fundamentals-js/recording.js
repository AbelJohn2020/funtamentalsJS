// hoisting in var, let y const.

var example;

if (true) {
    example = 'this is an example with var'
} else {
    example = 'this is other example';
}

console.log(example, 'var');

var exampletwo;
function exampleWithVar() {
    exampletwo = 'second example with var';
}
console.log(exampletwo, 'second example')


//lo mejor seria utilizar let para reasignar la variable mas no var, y si no la tenemos que reasignar entonces deberia ser const

function factorial (n) {

    if( !this.cache ) {
        this.cache = {}
    }

    if ( this.cache[n] ) {
        return this.cache[n]
    }

    if( n === 1 ) {
        return 1;
    }

    this.cache[n] = n * factorial( n -1 );
    return this.cache[n]
}