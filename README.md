# Card Game Project


### *Desktop Layout*

<img width="1439" alt="Captura de Tela 2023-01-16 às 16 18 44" src="https://user-images.githubusercontent.com/95102911/212752423-50213cba-4e0d-4818-808f-681ad2e30b75.png">

<img width="1437" alt="Captura de Tela 2023-01-16 às 16 19 46" src="https://user-images.githubusercontent.com/95102911/212752431-eb29d2dd-40ca-4fee-a717-bf0239710c53.png">

_____

#### Requirements for the project:

- General
     - [ ] Do not use any library to implement this project (jQuery, lodash, React, etc), nor other languages that compile to JS (TypeScript, ELM, etc), only pure JavaScript.
     - [ ] Your project must be developed using Git and GitHub, in a public repository.
     - [ ] For each implemented requirement make a *commit* with a descriptive message of what you have evolved.
- Layout
     - [ ] Apply *layout* to *desktop* and *mobile*, following Figma.
- Distribution of letters
     - [ ] When entering the game, the user should be asked with how many cards he wants to play (use `prompt`).
     - [ ] The user can only insert even numbers at the `prompt`, from 4 to 14. Any number that deviates from this rule must not be accepted. In the case of invalid numbers, the `prompt` must be repeated in a loop, until the user enters a valid number.
     - [ ] After entering a valid number of cards, the game should insert the cards face down on the page so that the distribution is random.
- Images of parrots
     - [ ] It is mandatory that both the face-down parrot image and the face-up image (gif) are implemented as tag `<img src="...">` (must not be a background).
         - OBS: the letter itself can be a `<div>`, only the parrot image that must be a `<img>`.
     - [ ] Same parrots must necessarily use the same image as a base (they cannot be different files for the same parrot).
- Click on the letter
     - [ ] When clicking on a card, it must be flipped.
     - [ ] If it is the first card of the pair, it must remain turned until the user chooses the second card.
     - [ ] If it is the second card turned over, there are two situations:
         - [ ] If it is the same as the first card, the user was right and both must now remain face up until the end of the game;
         - [ ] If it is a card other than the first card turned over, the user made a mistake. In this case, the game must **wait 1 second** and then turn the two cards face down again.
- End of the game
     - [ ] When the user finishes turning over all the cards correctly, **should** be displayed an `alert` with the message `You won in X moves!`, being X the amount of times the user turned a card in the game, that is, each card turned over is a move, it is not turning over two cards that is a move.
    
#### Requirements for the Bonus:

- Clock
     - [ ] Place a clock at the top right of the screen, counting how many seconds have passed since the start of the game.
     - [ ] At the end of the game, the victory message must be added to the time the user took to finish the game, in the following format: `You won in X moves! The duration of the game was Y seconds!`.
- Game restart
     - [ ] At the end of the game, after the victory alert, ask with a **prompt** if the user would like to restart the game.
     - [ ] If he answers `yes`, start the game again asking the number of cards.
     - [ ] If he answers `no`, just close the prompt and leave the cards as they are.
     - [ ] The prompt must receive the strings “**yes**” and “**no**”, with all lowercase letters and correct accents.
         - This prompt should not accept "s", "S", "n", "N" or any variation with uppercase or lowercase letters.

_____


### *Mobile Layout*

<img width="392" alt="Captura de Tela 2023-01-16 às 16 22 54" src="https://user-images.githubusercontent.com/95102911/212752605-00e1b09f-2a73-4e41-a21b-256013b4ffaf.png">

<img width="393" alt="Captura de Tela 2023-01-16 às 16 23 13" src="https://user-images.githubusercontent.com/95102911/212752619-5a677075-4683-4d6d-802e-b9371f0423b7.png">

