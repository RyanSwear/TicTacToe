const gameBoard = () => {
    this.player1 = ''
    this.player2 = ''
    this.mark = 'X';
    const board = [];

    const fillBoard = () =>{
        for(let i = 0; i < 9; i++)
        {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.innerText = '';
            tile.addEventListener('click', function (){
                if (tile.innerText == ''){tile.innerText = getMark(); changeMark();}})
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

    return{player1, player2, fillBoard, getMark, changeMark, setPlayers}
}
function init()
{
    const game = gameBoard();
    game.setPlayers();
    game.fillBoard();
    
}
init();