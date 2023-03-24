const canIWinBingo = (bingoCard, numbersCalled) => {
    
    let rowLength = 5;
    let columnLength = 5;

    // Check each row
    for(let i=0; i<rowLength; i++) {
        let numberMatch = bingoCard[i].filter(number => numbersCalled.includes(number));
        if(numberMatch.length === 5) {
            return true;
        }
    }

    // Check each column
    for(let i=0; i<rowLength; i++) {
        let column = [];
        for(let j=0; j<columnLength; j++) {
            column.push(bingoCard[j][i]);
        }
        
        let numberMatch = column.filter(number => numbersCalled.includes(number));

        if (numberMatch.length === 5) {
            return true;
        }
    }

    return false;
}

module.exports = canIWinBingo;