// baby's first object literal

let testCard = {
    suit: 'Hearts',
    face: 'Ace',
    value: [1 , 14],
    shown: false
} // end testCard
let deck = [];
const createSuit = suitToCreate => {
    //use loop to create all cards in a given suit
    for (let i = 1; i <=13; i++){
        let cardFace;
        let cardValue = [i];
        if (i === 1){
            cardFace = 'Ace';
            cardValue.push(14);
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
            values: cardValue,
            suit: suitToCreate,
            shown: false //default value
        }
        deck.push(newCard)
    } //end for
} //end createSuit

//create Deck of Cards
const createDeck = () => {
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    for (let i = 0; i <suits.length; i++){
        createSuit(suits[i]);
    }
    console.log(deck);
}
createDeck();