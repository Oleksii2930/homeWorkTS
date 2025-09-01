type Suit = 'spade' | 'diamond' | 'heart' | 'clubs';
type Value = '6' | '7' | '8' | '9' | '10' | 'jack' | 'queen' | 'king' | 'ace';
type Color = 'red' | 'black';

const suits: Suit[] = ['spade', 'diamond', 'heart', 'clubs'];
const values: Value[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const colors: Record<Suit, Color> = {
    spade: 'black',
    clubs: 'black',
    diamond: 'red',
    heart: 'red'
};

type Card = {
    cardSuit: Suit;
    value: Value;
    color: Color;
};

let deck: Card[] = [];

for (let suit of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: colors[suit] // ✅ тепер TS не лається
        });
    }
}


let spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Spade Ace:', spadeAce);
let sixes = deck.filter(card => card.value === '6');
console.log('All sixes:', sixes);
let diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log('Diamonds:', diamonds);
let highClubs = deck.filter(card =>
    card.cardSuit === 'clubs' &&
    ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)
);
console.log('Clubs 9 and higher:', highClubs);