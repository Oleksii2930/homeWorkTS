const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

interface Card {
    cardSuit: 'spade' | 'diamond' | 'heart' | 'clubs';
    value: string;
    color: 'red' | 'black';
}

const cards: Card[] = [];

for (const suit of suits) {
    for (const value of values) {
        const card: Card = { cardSuit: suit as Card["cardSuit"], value: value, color: 'black' };
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}

interface Accumulator {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[];
}

const reduce = cards.reduce(
    (accum: Accumulator, card) => {
        switch (card.cardSuit) {
            case 'spade':
                accum.spades.push(card);
                break;
            case 'diamond':
                accum.diamonds.push(card);
                break;
            case 'heart':
                accum.hearts.push(card);
                break;
            case 'clubs': // ✅ виправленоЛ
                accum.clubs.push(card);
                break;
        }
        return accum;
    },
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    }
);

console.log(reduce);
