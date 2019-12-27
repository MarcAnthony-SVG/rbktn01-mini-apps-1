class Game {

    constructor(n) {
        this.board = document.getElementById('board');
        this.init(n);
    }
    //initializing the Game. Preparing an n x n with tables and cells and appending them to the main board.
    init(n) {
        var tdIdCounter = 0;
        var rows = [];
        // create 3 table rows and 3 tds
        for (let i = 0; i < n; i++) {
            var row = document.createElement('tr');
            row.id = 'row-'+ i; // row ids will be: row-1, row-2 ...etc
            rows.push(row);
            for (let j = 0; j < n; j++) {
                var tableData = document.createElement('td');
                tableData.id = 'cell-' + tdIdCounter;  // cell ids will be: cell-1, cell-2 ...etc
                tdIdCounter++;
                rows[i].appendChild(tableData);
            }
        }
        rows.forEach((node) => {
            this.board.appendChild(node);
        });
    }
}

class Player {

}

var game = new Game(3);
console.log(game);

