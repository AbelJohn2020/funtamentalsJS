const Shion = {
    name: 'Shion',
    house: 'Aries',
    status: 'Gold Knight',
    age: 17,
};

const Aldebaran = {
    name: 'Aldebaran',
    house: 'Taurus',
    status: 'Gold Knight',
    age: 18,
};

const Aspros = {
    name: 'Aspros',
    house: 'Gemini',
    status: 'Gold Knight',    
    age: 18,
};

const Deuteros = {
    name: 'Deuteros',
    house: 'Gemini',
    status: 'Gold Knight',    
    age: 18,
};

const Manigoldo = {
    name: 'Manigoldo',
    house: 'Cancer',
    status: 'Gold Knight',    
    age: 17,
};

const Ileas = {
    name: 'Ileas',
    house: 'Leo',
    status: 'Gold Knight',    
    age: 26,
};

const Regulus = {
    name: 'Regulus',
    house: 'Leo',
    status: 'Gold Knight',    
    age: 12,
};


const Asmita = {
    name: 'Asmita',
    house: 'Vargo',
    status: 'Gold Knight',    
    age: 18,
};

const goldKnightOfLeo = goldKnight => goldKnight.house === 'Leo';

const houseKnight = goldKnight =>({...goldKnight, status: 'gold knight'})

const reducer = (accu, goldKnight) => accu + goldKnight.age

const goldKnights = [Shion, Aldebaran, Aspros, Deuteros, Manigoldo, Ileas, Regulus, Asmita];

const leosHouse = goldKnights.filter(goldKnightOfLeo);

//map return a new array
const mapHouseKnight = goldKnights.map(houseKnight)

//reduce .reduce(function, origin value of counter)
const reduceKnight = goldKnights.reduce(reducer, 0)

console.log(leosHouse)

console.log(mapHouseKnight)

console.log(reduceKnight)