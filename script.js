var turn = 'X';
var game = ['#','#','#',
            '#','#','#',
            '#','#','#'];
function move(x){
    if(game[x] === '#'){
        game[x] = turn;
        changeTurn();
        update();
    }
}
function newGame(){
    turn = 'X';
    game = ['#','#','#','#','#','#','#','#','#'];
    update();
}
function $(x){return document.getElementById(x);}
function changeTurn(){
    if(turn === 'X'){turn = 'O';}
    else{turn = 'X';}
}
function update(){
    $('turn').innerHTML = `${turn}'s Turn`
    $('zero').textContent = game[0];
    $('one').textContent = game[1];
    $('two').textContent = game[2];
    $('three').textContent = game[3];
    $('four').textContent = game[4];
    $('five').textContent = game[5];
    $('six').textContent = game[6];
    $('seven').textContent = game[7];
    $('eight').textContent = game[8];
}