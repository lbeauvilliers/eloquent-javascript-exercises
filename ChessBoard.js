characters = ['⬛','⬜'];
board = '';
size = 12;

for (i = 0; i < size; i++) {
    line = '';

    for (j = 0; j < size; j++) {
        line += characters[(i + j) % 2]
    }
    board += (line + '\n');
}

console.log(board);