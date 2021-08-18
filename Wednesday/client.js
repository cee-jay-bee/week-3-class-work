// baby's first object literal

let testCard = {
    suit: 'Hearts',
    face: 'Ace',
    value: [1 , 14],
    shown: false
} // end testCard

const createSuit = suitToCreate => {
    console.log( 'in createSuit:', suitToCreate);
    //use loop to create all cards in a given suit
    for (let i = 1; i <=13; i++){
        let cardFace;
        if (i === 1){
            cardFace = 'Ace';
        } else if (i === 11){
            cardFace = 'Jack';
        } else if (i === 12){
            cardFace = 'Queen';
        } else if (i === 13){
            cardFace = 'King';
        } else {
            cardFace = i.toString();
        }
        let newCard = {
            face: cardFace,
            values: [ i ],
            suit: suitToCreate,
            shown: false //default value
        }
        console.log('created:', newCard);
    } //end for
} //end createSuit
//create Deck of Cards
createSuit('Hearts');
createSuit('Spades');
createSuit('Diamonds');
createSuit('Clubs');