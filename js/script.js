const cards = [];

const gifts = [
    `<img src="/img/christmas.gif">`,
    `<img src="/img/discord.gif">`,
    `<img src="/img/ghibli.gif">`,
    `<img src="/img/pooh.gif">`,
    `<img src="/img/spinner.gif">`,
    `<img src="/img/sticker.gif">`,
];

let counter = 0;

const listLetters = document.querySelector('.card');

function startGame() {

    let amountLetters = parseInt(prompt(`🔹 Com quantas cartas deseja jogar?
    🔺 Obs: Digite um número par entre 4 e 14!`));

    while ((amountLetters % 2 !== 0) || (amountLetters < 4) || (amountLetters > 14)) {
        amountLetters = parseInt(prompt(`🔺 Atenção!!
    ➡️ Digite um número par entre 4 e 14!`));
    };

    for (let i = 0; i < (amountLetters / 2); i++) {
        cards.push(gifts[i], gifts[i]);
    };

    gifts.sort(randomL);
    cards.sort(randomL);

    for (let i = 0; i < amountLetters; i++) {
        const box = document.querySelector('.box-cards');
        box.innerHTML += `
        <div class="card" onclick="turn(this)">
            <div class="front-face face">
                <img src="img/back.png">
            </div>
            <div class="back-face face">
                ${cards[i]}
            </div>
        </div>`
    }
}

function randomL() {
    return Math.random() - 0.5;
}

startGame()
