function check_word(guess, answer) {
    /*visited = dict()
    guess_split = guess.split()
    artist_split = artist.split()
    squares = list()

    for guess_word, artist_word in zip(guess_split, artist_split):
        if len(guess_word) != len(artist_word):
            return "error"

    for guess_word, artist_word in zip(guess_split, artist_split):
        visited_aux, squares_word = zip(*[((letter,artist_word.count(letter) - 1), green) if letter == real_letter else ((letter,artist_word.count(letter)), black) for letter, real_letter in zip(guess_word, artist_word)])
        visited_aux = list(visited_aux)
        squares_word = list(squares_word)
        
        for letter,count in visited_aux:
            if letter not in visited:
                visited[letter] = count

        for i, (letter, real_letter) in enumerate(zip(guess_word, artist_word)):
            if letter == real_letter:
                continue

            if letter in artist and visited[letter] > 0:
                squares_word[i] = yellow
                visited[letter] -= 1

        squares.append(str().join(squares_word))

    return '  '.join(squares)

    -------------------------------------PYTHON CODE I HAD WRITEN------------------------------------

*/
}

