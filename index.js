let cards = []

let list = [
    [
        {name: '2', icon: 'spades', suit: 'spades'},
        {name: '2', icon: 'spades', suit: 'diamonds'},
        {name: '2', icon: 'spades', suit: 'hearts'},
        {name: '2', icon: 'spades', suit: 'clubs'},
    ],
    [
        {name: '3', icon: 'spades', suit: 'spades'},
        {name: '3', icon: 'spades', suit: 'diamonds'},
        {name: '3', icon: 'spades', suit: 'diamonds'},
        {name: '3', icon: 'spades', suit: 'diamonds'},
    ],
    [
        {name: '4', icon: 'spades', suit: 'spades'},
        {name: '4', icon: 'spades', suit: 'diamonds'},
        {name: '4', icon: 'spades', suit: 'diamonds'},
        {name: '4', icon: 'spades', suit: 'diamonds'},
    ],
    [
        {name: '5', icon: 'spades', suit: 'spades'},
        {name: '5', icon: 'spades', suit: 'diamonds'},
        {name: '5', icon: 'spades', suit: 'diamonds'},
        {name: '5', icon: 'spades', suit: 'diamonds'},
    ],
    [
        {name: '6', icon: 'spades', suit: 'spades'},
        {name: '6', icon: 'spades', suit: 'diamonds'},
        {name: '6', icon: 'spades', suit: 'diamonds'},
        {name: '6', icon: 'spades', suit: 'diamonds'},
    ],
    [
        {name: '7', icon: 'spades', suit: 'spades'},
        {name: '7', icon: 'spades', suit: 'diamonds'},
        {name: '7', icon: 'spades', suit: 'diamonds'},
        {name: '7', icon: 'spades', suit: 'diamonds'},
    ],
    [
        {name: '8', icon: 'spades', suit: 'spades'},
        {name: '8', icon: 'spades', suit: 'diamonds'},
        {name: '8', icon: 'spades', suit: 'diamonds'},
        {name: '8', icon: 'spades', suit: 'diamonds'},
    ],
    [
        {name: '9', icon: 'spades', suit: 'spades'},
        {name: '9', icon: 'spades', suit: 'diamonds'},
        {name: '9', icon: 'spades', suit: 'diamonds'},
        {name: '9', icon: 'spades', suit: 'diamonds'},
    ],
    [
        {name: '10', icon: 'spades', suit: 'spades'},
        {name: '10', icon: 'spades', suit: 'diamonds'},
        {name: '10', icon: 'spades', suit: 'diamonds'},
        {name: '10', icon: 'spades', suit: 'diamonds'},
    ],
    [
        {name: 'J', icon: 'jack', suit: 'spades'},
        {name: 'J', icon: 'jack', suit: 'diamonds'},
        {name: 'J', icon: 'jack', suit: 'diamonds'},
        {name: 'J', icon: 'jack', suit: 'diamonds'},
    ],[
        {name: 'Q', icon: 'queen', suit: 'spades'},
        {name: 'Q', icon: 'queen', suit: 'diamonds'},
        {name: 'Q', icon: 'queen', suit: 'diamonds'},
        {name: 'Q', icon: 'queen', suit: 'diamonds'},
    ],[
        {name: 'K', icon: 'king', suit: 'spades'},
        {name: 'K', icon: 'king', suit: 'diamonds'},
        {name: 'K', icon: 'king', suit: 'diamonds'},
        {name: 'K', icon: 'king', suit: 'diamonds'},
    ],
]
for (i = 0; i < list.length; i++) {
    cards += '<div class="wrapper">'
    for(c = 0; c < list[i].length; c++) {
        cards += ` 
            <div class="card card--person"> 
            <div class="card__info"> 
                ${list[i][c].name}
                <img src="images/${list[i][c].suit}.svg" alt="${list[i][c].suit}"> 
            </div> 
            <img class="person" src="images/${list[i][c].icon}.svg" alt="${list[i][c].icon}"> 
            <div class="card__info"> 
                ${list[i][c].name}
                <img src="images/${list[i][c].suit}.svg" alt="${list[i][c].suit}"> 
            </div> 
            </div> 
        `;
    }
    cards += '</div>'
}

//document.write(cards) - так не красиво рендерится...

document.querySelector('body').innerHTML = cards;
