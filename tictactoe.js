const gameBoard = (player1, player2) => {
    this.player1 = player1;
    this.player2 = player2;
    this.mark = 'X';
    const board = [];

    const fillBoard = () =>{
        for(let i = 0; i < 9; i++)
        {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.innerText = '';
            tile.addEventListener('click', function (){tile.innerText = getMark(); changeMark();console.log('pressed');})
            document.getElementById('board').appendChild(tile);
            board.push(tile);
        }
    }

    const getMark = () =>{
        return this.mark;
    }

    const changeMark = () =>{
        if (this.mark == 'X')
        {
            this.mark = 'O';
        }
        else{ this.mark = 'X';}
    }

    return{player1, player2, fillBoard, getMark, changeMark}
}
function init()
{
    const game = gameBoard();
    game.fillBoard();
}
init();