const canIWinBingo = (bingoCard, numbersCalled) => {
    
    let rowLength = 5;

    for(let i=0; i<rowLength; i++) {

        let numberMatch = bingoCard[i].filter(number => numbersCalled.includes(number));

        return numberMatch.length > 0
    }

    return false;
}

module.exports = canIWinBingo;