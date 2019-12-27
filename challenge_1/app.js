class Game {
    constructor() {
        this.board = document.getElementById('board');
        this.played = [];
        this.won = false;
        this.init();
    }
    //initializing the Game. Preparing an n x n with tables and cells and appending them to the main board.
    init() {
        var tdIdCounter = 0;
        var rows = [];
        // create 3 table rows and 3 tds
        for (let i = 0; i < 3; i++) {
            var divElement = document.createElement('div');
            var row = this.board.appendChild(divElement);

            for (var j = 0; j < 3; j++) {
                var buttonElement = document.createElement('button');
                buttonElement.classList.add('table');
                buttonElement.id = i + '' + j;
                buttonElement.addEventListener('click', this.display);
                row.appendChild(buttonElement)
            }
        }
    }

    checkRows() {

    }

    checkColumns() {

    }

    checkDiagonals() {

    }

    display() {
    }
}

class Player {

}

var game = new Game(3);

