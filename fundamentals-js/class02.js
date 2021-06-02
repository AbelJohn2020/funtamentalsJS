// strings

const firstName = 'Abel';
const lastName = 'Arbildo';

const uppercaseName = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;

console.log(uppercaseName);
// charAt(number of order)

function WriteYourName(yourName) {
    const information = `Your name is ${yourName} and your last letter was ${yourName.charAt(yourName.length -1)}`;
    return information;
}

