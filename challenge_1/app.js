class Game {
    constructor() {
        this.board = document.getElementById('board');
        this.turn = document.getElementById('turn');
        this.winner = document.getElementById('wiener');

        this.player1 = document.getElementById('player-1');
        this.player2 = document.getElementById('player-2');

        let player1_score = document.getElementById('p1-score');
        let player2_score = document.getElementById('p2-score');

        this.player1.innerHTML = this.p1 = prompt('PLease Enter Player 1"s name');
        this.player1.innerHTML += ' (X)';

        this.player2.innerHTML = this.p2 = prompt('PLease Enter Player 2"s name');
        this.player2.innerHTML += ' (O)';

        this.p1Next = true;

        while (this.p1 === this.p2) {
            this.p2 = prompt('Invalid, player 2 should have a different name!, enter a new name for player2:');
            this.player2.innerHTML = this.p2;
        }

        this.played = [];
        this.won = false;

        this.init();
    }
    //initializing the Game. Preparing an n x n with tables and cells and appending them to the main board.
    init() {
        //board init

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


    ////////////////////////////////////////

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

    checkDiagonals = () =>{

    };


    checkWins = () => {
        return this.checkRows() || this.checkColumns() || this.checkDiagonals()
    };


    display = (e) => {
        this.played.push(e.target.id);
        e.target.innerHTML = this.p1Next ? 'X' : 'O';
        this.p1Next = !this.p1Next; // toggle

        //after each movement, check if any player has won
        console.log(this.checkColumns());
        this.won = this.checkWins()
    }

}

class Player {

}

var game = new Game(3);

