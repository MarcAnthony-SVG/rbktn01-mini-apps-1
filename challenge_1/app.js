class Game {
    constructor() {
        this.board = document.getElementById('board');
        this.reset = document.getElementById('reset');
        this.reset.addEventListener('click', this.init);
        this.turn = document.getElementById('turn');
        this.winner = document.getElementById('wiener');

        this.player1 = document.getElementById('player-1');
        this.player2 = document.getElementById('player-2');

        this.player1_score = document.getElementById('p1-score');
        this.player2_score = document.getElementById('p2-score');

        this.currentPlayer;


        this.player1.innerHTML = this.p1 = prompt('PLease Enter Player 1"s name');
        this.player1.innerHTML += ' (X)';

        this.player2.innerHTML = this.p2 = prompt('PLease Enter Player 2"s name');
        this.player2.innerHTML += ' (O)';

        this.p1Next = true;

        while (this.p1 === this.p2) {
            this.p2 = prompt('Invalid, player 2 should have a different name!, enter a new name for player2:');
            this.player2.innerHTML = this.p2;
        }

        this.played;
        this.won;

        this.init();
    }
    //initializing the Game. Preparing an n x n with tables and cells and appending them to the main board.
    init = () => {
        //board init

        this.board.innerHTML = '';
        this.winner.innerHTML = '';
        this.played = [];
        this.won = false;
        this.turn.innerHTML = '';

        // create 3 table rows and 3 tds
        for (let i = 0; i < 3; i++) {
            var divElement = document.createElement('div');
            var row = this.board.appendChild(divElement);

            for (var j = 0; j < 3; j++) {
                var buttonElement = document.createElement('button');
                buttonElement.classList.add('cell');
                buttonElement.id = i + '' + j;
                buttonElement.innerHTML = '&nbsp;&nbsp;'; //adding a non breaking space because of this a stupid bug that adds a padding whenever an element is clicked

                buttonElement.addEventListener('click', this.display);
                row.appendChild(buttonElement)
            }
        }
    };

    // check rows for winning situation
    checkRows = () => {
        for (let row = 0; row < 3; row++) {
            var xCount = 0;
            var oCount = 0;

            for (let col = 0; col < 3; col++) {
               var value = document.getElementById(row + '' + col); // the value of the cell
                if (value.innerHTML === 'X') {
                    xCount++;
                } else if (value.innerHTML === 'O') {
                    oCount++;
                }
            }

            if (xCount === 3 || oCount === 3) {
                return true;
            }
        }
        return false;
    };

    // check columns for winning situation

    checkColumns = () => {
        for (let row = 0; row < 3; row++) {
            var xCount = 0;
            var oCount = 0;

            for (let col = 0; col < 3; col++) {
                var value = document.getElementById(col + '' + row); // the value of the cell
                if (value.innerHTML === 'X') {
                    xCount++;
                } else if (value.innerHTML === 'O') {
                    oCount++;
                }
            }

            if (xCount === 3 || oCount === 3) {
                return true;
            }
        }
        return false;
    };

    // check all diagonals fo winning
    checkDiagonals = () => {
        if (this.checkMajorDiagonal()) return true;
        return !!this.checkMinorDiagonal();
    };

    // check major diagonal only
    checkMajorDiagonal = () => {
        var xCount = 0; var oCount = 0;
        for (var index = 0; index < 3; index++) {
            var value = document.getElementById(index + '' + index);
            if (value.innerHTML === 'X') {
                xCount++;
            } else if (value.innerHTML === 'O') {
                oCount++;
            }
        }
        return xCount === 3 || oCount === 3;

    };
    // check minor diagonal only
    checkMinorDiagonal = () => {
        var xCount = 0; var oCount = 0;
        var columnIndex = 2;
        for (var index = 0; index < 3; index++) {
            var value = document.getElementById(index + '' + columnIndex);
            if (value.innerHTML === 'X') {
                xCount++;
            } else if (value.innerHTML === 'O') {
                oCount++;
            }
            columnIndex--;
        }
        return xCount === 3 || oCount === 3;

    };
    // check all possible wins solutions
    checkWins = () => {
        return this.checkRows() || this.checkColumns() || this.checkDiagonals()
    };

    // display which player's turn is it
    displayPlayerRound = () => {
        this.currentPlayer = this.p1Next ? this.p1 : this.p2;
        this.turn.innerHTML = 'Yo Its ' + this.currentPlayer + "'s turn!"
    };

    // displays either X or O and checks if the current player has one or not.

    display = (e) => {
        //stops button clicks if a player won or a button is already have been clicked
        if (this.played.indexOf(e.target.id) !== -1 || this.won) {
            return;
        }

        this.played.push(e.target.id); //to keep track of the number of plays in the game

        e.target.innerHTML = this.p1Next ? 'X' : 'O';

        this.p1Next = !this.p1Next; // toggle to the next player

        //after each movement, check if the current player has won or not
        this.won = this.checkWins();

        if (!this.won) {
            this.displayPlayerRound();
        }
        if (this.won) {
            this.currentPlayer = this.p1Next ? this.p2 : this.p1;

            if (this.currentPlayer === this.p1) {
                this.player1_score.innerHTML = Number(this.player1_score.innerHTML) + 1;
            } else if (this.currentPlayer === this.p2) {
                this.player2_score.innerHTML = Number(this.player2_score.innerHTML) + 1;
            }
            this.p1Next = !this.p1Next;
            this.winner.innerHTML = this.currentPlayer + ' WON!!!!!!!!!!'
        }
        if (!this.won && this.played.length === 9) {
            this.winner.innerHTML = "Its a TIE lads"
        }
    };

}


var game = new Game();

