const gameBoard = () => {
    this.player1 = ''
    this.player2 = ''
    this.mark = 'X';
    const board = [];
    this.winner = '';

    const fillBoard = () =>{
        for(let i = 0; i < 9; i++)
        {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.innerText = '';
            tile.addEventListener('click', function (){
                if (tile.innerText == ''){tile.innerText = getMark(); changeMark(); checkWin();}})
            document.getElementById('board').appendChild(tile);
            board.push(tile);
        }
        document.getElementById('board').style.display = 'none';
    }

    const getMark = () =>{
        return this.mark;
    }

    const changeMark = () =>{
        
        if (this.mark == 'X' )
        {
            this.mark = 'O';
        }
        else{ this.mark = 'X';}
    }
    const setName1 = (string) => {this.player1 = string;}
    const setName2 = (string) => {this.player2 = string;}

    const setPlayers = () => {
        const form = document.createElement('form');

        const label1 = document.createElement('label');
        label1.htmlFor = 'Player1';
        label1.innerText = "Player 1's name: ";

        const input1 = document.createElement('input');
        input1.type = 'text';
        input1.id = 'Player1';
        input1.name = "player1Name";
        input1.value = '';

        form.appendChild(label1);
        form.appendChild(input1);
        form.appendChild(document.createElement('br'));

        const label2 = document.createElement('label');
        label2.htmlFor = 'Player2';
        label2.innerText = "Player 2's name: ";

        const input2 = document.createElement('input');
        input2.type = 'text';
        input2.id = 'Player2';
        input2.name = "player1Name";
        input2.value = '';

        const button = document.createElement('button');
        button.innerText = 'Submit';
        button.addEventListener('click', function () {
            setName1(input1.value);
            setName2(input2.value);
            document.getElementById('board').style.display = 'grid';
            document.getElementById('header').removeChild(document.getElementById('header').lastChild);
        })

        form.appendChild(label2);
        form.appendChild(input2);
        form.appendChild(document.createElement('br'));
        form.appendChild(button);
        document.getElementById('header').appendChild(form);
        
    }

    const checkWin = () => {
        checkRows('X');
        checkRows('O');
        checkColumns('X');
        checkColumns('O');
        checkX('X');
        checkX('O');

        if(this.winner != '')
        {
            displayWinnerPrompt();
        }
    }

    const checkRows = (symbol) => {
        for (let i = 0; i < 3; i = i + 3)
        {
            if (board[i].innerText == symbol && board[i + 1].innerText == symbol && board[i + 2].innerText == symbol)
            {
                this.winner = symbol;
                console.log(symbol);
            }
        }
    }

    const checkColumns = (symbol) => {
        for (let i = 0; i <= 2; i++)
        {
            if (board[i].innerText == symbol && board[i + 3].innerText == symbol && board[i + 6].innerText == symbol)
            {
                this.winner = symbol;
                console.log(symbol);
            }
        }
    }

    const checkX = (symbol) => {
        if (board[0].innerText == symbol && board[4].innerText == symbol && board[8].innerText == symbol)
        {
            this.winner = symbol;
            console.log(symbol);
        }

        if (board[2].innerText == symbol && board[4].innerText == symbol && board[6].innerText == symbol)
        {
            this.winner = symbol;
            console.log(symbol);
        }
    }

    const displayWinnerPrompt = () =>{
        if (this.winner == 'X')
        {
            let r = confirm(this.player1 + " won the game! Reset?");
            if (r)
            {
                for (let i = 0; i < 9; i ++)
                {
                    board[i].innerText = ''
                }
                this.winner = '';
                this.mark = 'X';
            }
        }

        if(this.winner == 'O')
        {
            let r = confirm(this.player2 + " won the game! Reset?");
            if (r)
            {
                for (let i = 0; i < 9; i ++)
                {
                    board[i].innerText = ''
                }
                this.winner = '';
                this.mark = 'X';
            }
        }
    }

    return{player1, player2, fillBoard, getMark, changeMark, setPlayers}
}
function init()
{
    const game = gameBoard();
    game.setPlayers();
    game.fillBoard();
    
}
init();