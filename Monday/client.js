console.log( `js`);

//baby's first function
const sayHello = (name = 'CJ') => {
    console.log( `Hello World and`, name);
}

sayHello();
sayHello('Dev');

//next function takes in two args and returns sum
const addTheseTwo = (thing1, thing2) => thing1 + thing2;

console.log(addTheseTwo (1, 45));

const countSpaces = stringWithSpaces => {
    let spaces = 0;
    for (let i = 0; i < stringWithSpaces.length; i++){
        if (stringWithSpaces[i] === ' '){
            spaces++;
        }
    }
    return spaces;
}

let sushiSpots = [`Sushi Train`, `Wakame`, `Osaka`, `1 2 3 Sushi`];

const displaySushiSpots = () => {
    for (let spots of sushiSpots){
        console.log(spots);
        if (spots.includes( ' ')){
            console.log('...has', countSpaces(spots), 'spaces in name');
        }
    }
}

displaySushiSpots();




console.log(countSpaces('Dunkin donuts has coffee and mediocre donuts'));
