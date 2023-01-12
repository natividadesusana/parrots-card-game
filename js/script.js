const cards = [];

const gifts = [
    `<img src="/img/christmas.gif">`,
    `<img src="/img/discord.gif">`,
    `<img src="/img/ghibli.gif">`,
    `<img src="/img/pooh.gif">`,
    `<img src="/img/spinner.gif">`,
    `<img src="/img/sticker.gif">`,
    `<img src="/img/bird.gif">`
];

let counter = 0;

let selectedStatus = false;

let chosenLetter = null;

let equalLetter = []

let amountLetters = null;

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
        <div class="card" onclick="clickLetter(this)">
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

function clickLetter(card) {
    const backFace = card.querySelector('.back-face');

    if (backFace.classList.contains('.selected') === false) {
        spinLetter(card);
        counter++;

        if (selectedStatus === false) {
            chosenLetter = card;
            selectedStatus = true;
        }

        else if (chosenLetter.classList[1] !== card.classList[1]) {
            selectedStatus = false;
            setTimeout(spinLetter, 1000, chosenLetter);
            setTimeout(spinLetter, 1000, card);
            chosenLetter = null;
        }

        else {
            selectedStatus = false;
            equalLetter.push(card.classList[1]);
        }
    }
}

function spinLetter(card) {
    const frontFace = card.querySelector('.front-face');
    frontFace.classList.toggle('selected-front');
    const backFace = card.querySelector('.back-face');
    backFace.classList.toggle('selected-back');
}
