const base_URI = 'https://swapi.dev/api/';
const people_URL = 'people/:id';

const thirdOption = { crossDomain: true };

function getAperson (id) {
    return new Promise((resolve, reject) => {
        const url = `${base_URI}${people_URL.replace(':id', id)}/`;
        
        //this is the way to call jQuery
        $
            .get(url, thirdOption, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })

}

function onError(id) {
    console.error(`An error occurred while getting the character ${id}`);
}

async function getData() {
    const ids = [1, 2, 3, 4, 5, 6, 7];
    
    const promises = ids.map(id => getAperson(id))
    
    try {
        const dataPeople = await Promise.all(promises)
        console.log(dataPeople)
    } catch(id) {
        onError(id)
    }
}

getData();
