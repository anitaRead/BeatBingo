const getWinningCard = (bingoCards, numbersCalled) => {


    for(let i = 0; i < bingoCards.length; i++) {
        let currentBingoCard = bingoCards[i];
        

        for(let j = 0; j < currentBingoCard.length; j++) {

            let winningNumbers = [];

            // Check rows
            winningNumbers = currentBingoCard[j].filter(number => numbersCalled.includes(number));
            if(winningNumbers.length === 5) {
                console.log(`Winning card found [row]: ${currentBingoCard}`);
                return currentBingoCard;
            }

            // Check columns 
            let column = [];
            for(let k = 0; k < currentBingoCard.length; k++) {
                column.push(currentBingoCard[k][j]);
            }
            winningNumbers = column.filter(number => numbersCalled.includes(number));

            if(winningNumbers.length === 5) {
                console.log(`Winning card found [column]: ${currentBingoCard}`);
                return currentBingoCard;
            }

        }
    }

    return false;


}

module.exports = getWinningCard;