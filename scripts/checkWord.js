function checkWord(guess, answer) {
    let visited = new Object();
    let squares = new Array();

    for (let i = 0; i < answer.length; i++) {
        let count = 0;
        for (const l of answer) if (l == guess[i]) count++;
        if (guess[i] == answer[i]) {
            squares[i] = green;
            if (!(guess[i] in visited)) {
                count--;
                visited[guess[i]] = count;
            }
            else visited[guess[i]] = visited[guess[i]] - 1;
        }
        else {
            squares[i] = black;
            if (!(guess[i] in visited)) visited[guess[i]] = count;
        }
    }

    for (let i = 0; i < answer.length; i++) {
        if (guess[i] == answer[i]) continue;
        if (answer.includes(guess[i]) && visited[guess[i]]) {
            squares[i] = yellow;
            visited[guess[i]] = visited[guess[i]] - 1;
        }
    }

    return squares;
}