// do while

let counter = 0;

const rain = () => parseFloat((Math.random()).toFixed(2)) < 0.25

do {
    counter++
} while (!rain()) {
    if(counter===1){
        console.log(`I was going to look if was raining ${counter} time`)
    } else {
        console.log(`I was going to look if was raining ${counter} times`)
    }
}