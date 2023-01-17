const cards = [];

/* Back of cards pictures */
const gifts = [
    `<img data-test="face-down-image" src="/img/christmas.gif">`,
    `<img data-test="face-down-image" src="/img/discord.gif">`,
    `<img data-test="face-down-image" src="/img/ghibli.gif">`,
    `<img data-test="face-down-image" src="/img/pooh.gif">`,
    `<img data-test="face-down-image" src="/img/spinner.gif">`,
    `<img data-test="face-down-image" src="/img/sticker.gif">`,
    `<img data-test="face-down-image" src="/img/bird.gif">`
];

let counter = 0;

let selectedStatus = false;

let chosenLetter = null;

let equalLetter = [];

let amountLetters = null;

let amountPairs = null;

/* Starting the game */
function startGame() {

    let amountLetters = parseInt(prompt(`🔹 Com quantas cartas deseja jogar?
    🔺 Obs: Digite um número par entre 4 e 14!`));

    while ((amountLetters % 2 !== 0) || (amountLetters < 4) || (amountLetters > 14)) {
        amountLetters = parseInt(prompt(`🔺 Atenção!!
    ➡️ Digite um número par entre 4 e 14!`));
    };

    gifts.sort(randomLetters);

    for (let i = 0; i < (amountLetters / 2); i++) {
        cards.push(gifts[i], gifts[i]);
    };

    amountPairs = amountLetters / 2;
    cards.sort(randomLetters);
    
     /* Distribution of letters */
    for (let i = 0; i < amountLetters; i++) {
        const box = document.querySelector('.box-cards');
        box.innerHTML += `
        <div data-test="card" class="card" onclick="clickLetter(this)">
            <div class="front-face face">
                <img data-test="face-up-image" src="img/back.png">
            </div>
            <div class="back-face face">
                ${cards[i]}
            </div>
        </div>`
    };
};

/* Shuffling cards */
function randomLetters() {
    return Math.random() - 0.5;
};

startGame()

/* Click on the letter */
function clickLetter(card) {

    const backFace = card.querySelector('.back-face');

    if (counter == 0) {
        time = setInterval(timeCounter, 1000);
    };

    if (backFace.classList.contains('.selected-back') === false) {
        spinLetter(card);
        counter++;
        if (selectedStatus === false) {
            chosenLetter = card;
            selectedStatus = true;
        } else if (chosenLetter.innerHTML !== card.innerHTML) {
            selectedStatus = false;
            setTimeout(spinLetter, 1000, chosenLetter);
            setTimeout(spinLetter, 1000, card);
            chosenLetter = null;
        } else {
            selectedStatus = false;
            equalLetter.push(card.classList[1]);
        } if (equalLetter.length === amountPairs) {
            clearTimeout(time);
            setTimeout(endGame, 1000);
        };
    };
};

/* Turning the card */
function spinLetter(card) {
    const frontFace = card.querySelector('.front-face');
    frontFace.classList.toggle('selected-front');
    const backFace = card.querySelector('.back-face');
    backFace.classList.toggle('selected-back');
};

/* Creating clock */
function timeCounter() {
    const clock = document.querySelector('.clock');
    clock.innerHTML = parseInt(clock.innerHTML) + 1;
};

/* Ending and restarting game */
function endGame() {

    const clock = document.querySelector('.clock');

    alert(`🎉 Você ganhou em ${counter} jogadas! A duração do jogo foi de ${clock.innerHTML} segundos!`);

    let restart = prompt('Deseja reiniciar a partida? (sim/não)');

    while(restart !== 'sim' && restart !== 'não') {
       restart = prompt(`🔺 Atenção!!
    ➡️ Digite [sim] ou [não]!`);
    };
    if (restart === 'sim') {
       location.reload(true);
    } else {
        alert(`Obrigada por jogar Parrot Card Game!
    💚 Até Logo!`)
    };
      
};


