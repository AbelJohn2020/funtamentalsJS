const base_uri = 'https://swapi.dev/api/';
const people_url = 'people/:id';

const option = { crossDomain: true };

function getAperson (id) {
    return new Promise((resolve, reject) => {
        const url = `${base_uri}${people_url.replace(':id', id)}/`;
        
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

getAperson(1)
    .then(function(data) {
        console.log(data)
        return getAperson(2)
    })
    .then(function(data) {
        console.log(data)
        return getAperson(3)
    })
    .then(function(data) {
        console.log(data)
        return getAperson(4)
    })
    .then(function(data) {
        console.log(data)
        return getAperson(5)
    })
    .then(function(data) {
        console.log(data)
        return getAperson(6)
    })
    .then(function(data) {
        console.log(data)
        return getAperson(7)
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(onError)