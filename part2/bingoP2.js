const getWinningCard = (bingoCards, numbersCalled) => {


    for(let i = 0; i < bingoCards.length; i++) {
        let currentBingoCard = bingoCards[i];
        
        // Check rows
        for(let j = 0; j < currentBingoCard.length; j++) {
            let winningNumbers = currentBingoCard[j].filter(number => numbersCalled.includes(number));
            if(winningNumbers.length === 5) {
                return currentBingoCard;
            }
        }

    }


}

module.exports = getWinningCard;