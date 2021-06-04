const BASE_URI = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const secondOption = { crossDomain: true };

function getAperson (id) {
    return new Promise((resolve, reject) => {
        const url = `${BASE_URI}${PEOPLE_URL.replace(':id', id)}/`;
        
        //this is the way to call jQuery
        $
            .get(url, option, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })

}

function onError(id) {
    console.error(`An error occurred while getting the character ${id}`);
}

const ids = [1, 2, 3, 4, 5, 6, 7];

const promises = ids.map(id => getAperson(id))
Promise
    .all(promises)
    .then(data => console.log(data))
    .catch(onError)