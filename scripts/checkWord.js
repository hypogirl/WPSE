function checkWord(guess, answer) {
    visited = new Object();
    squares = new Array();

    for (let i = 0; i < answer.length; i++) {
        let count = 0;
        for (const l of answer) if (l == guess[i]) count++;
        if (guess[i] == answer[i]) {
            count--;
            visited[guess[i]] = count;
            squares[i] = green;
        }
        else {
            visited[guess[i]] = count;
            squares[i] = black;
        }
    }

    for (let i = 0; i < answer.length; i++) {
        if (guess[i] == answer[i]) continue;
        if (answer.includes(guess[i]) && visited[guess[i]]) {
            squaresWord[i] = yellow;
            visited[guess[i]]--;
        }
    }

    return squares;
}