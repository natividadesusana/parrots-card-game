const cards = [];
const gifts = [
    './img/discord.gif',
    './img/pooh.gif'
];
let counter = 0;
let amountGifts = null;
const listLetters = document.querySelector('.card');

function startGame() {

    let amountLetters = parseInt(prompt(`Com quantas cartas deseja jogar?
Obs: Digite um número par entre 4 e 14!`));

    while ((amountLetters % 2 !== 0) || (amountLetters < 4) || (amountLetters > 14)) {
        amountLetters = parseInt(prompt(`⚠️ Atenção!!
Digite um número par entre 4 e 14!`));
    };

    for (let i = 0; i < (amountLetters / 2); i++) {
        cards.push(i);
    };

    amountGifts = amountLetters / 2;
    cards.sort(random);
}

function random() {
    return Math.random() - 0.5;
}

startGame()
