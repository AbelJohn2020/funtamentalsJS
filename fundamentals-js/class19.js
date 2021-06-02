const Shion = {
    name: 'Shion',
    house: 'Aries',
    status: 'Gold Knight',
};

const Aldebaran = {
    name: 'Aldebaran',
    house: 'Taurus',
    status: 'Gold Knight',
};

const Aspros = {
    name: 'Aspros',
    house: 'Gemini',
    status: 'Gold Knight',    
};

const Deuteros = {
    name: 'Deuteros',
    house: 'Gemini',
    status: 'Gold Knight',    
};

const Manigoldo = {
    name: 'Manigoldo',
    house: 'Cancer',
    status: 'Gold Knight',    
};

const Ileas = {
    name: 'Ileas',
    house: 'Leo',
    status: 'Gold Knight',    
};

const Regulus = {
    name: 'Regulus',
    house: 'Leo',
    status: 'Gold Knight',    
};


const Asmita = {
    name: 'Asmita',
    house: 'Vargo',
    status: 'Gold Knight',    
};


const goldKnight = [Shion, Aldebaran, Aspros, Deuteros, Manigoldo, Ileas, Regulus, Asmita];

for(let i = 0; i < goldKnight.length; i++) {
    let knight = goldKnight[i]

    console.log(`${knight.name}, ${knight.status} of ${knight.house}`)
}